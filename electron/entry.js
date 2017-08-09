const pkg = require('../package.json');
const windowStateKeeper = require('electron-window-state');
const electron = require('electron');
const {
    app,
    BrowserWindow,
    Menu,
    Tray,
    dialog,
    powerSaveBlocker,
    autoUpdater,
    ipcMain,
} = require('electron');
const contextMenu = require('./electron-context-menu/index');
const path = require('path');
const fs = require("fs");
const moment = require("moment");
const winston = require('winston');
let logDir = 'errorlog';


//Main process constants
let win;
let appIcon = null;

//Let's start electron's main process work.
runMainProcess();

function runMainProcess() {
    // Create the directory if it does not exist
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    //initiate logger
    let logger = new(winston.Logger)({
        transports: [
            new(winston.transports.Console)(),
            new(winston.transports.File)({
                filename: path.join(logDir, '/error' + require("moment")(new Date()).format("MMDDYYYY") + '.log')
            })
        ]
    });

    //.. handling squirrel installer process goes here ..
    //.....
    //.....

    console.log('******************');
    console.log(pkg.version);
    console.log('******************');

    //Task:Block the system from entering low-power (sleep) mode.
    const id = powerSaveBlocker.start('prevent-display-sleep');
    logger.info(powerSaveBlocker.isStarted(id));
    powerSaveBlocker.stop(id);
    //End: powerSaveBlocker


    /* Start :Single instance running */
    if (process.platform !== 'darwin') {
        const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
            // Someone tried to run a second instance, we should focus our window.
            if (win) {
                if (win.isMinimized()) win.restore();
                win.focus();
            }
        });

        if (shouldQuit) {
            app.quit();
            return;
        }
    }
    /* End:Single instance running */



    /* Main window design and start, close events */
    function createWindow() {
        let mainWindowState = windowStateKeeper({
            defaultWidth: 1000,
            defaultHeight: 800
        });
        // Create the browser window.
        win = new BrowserWindow({
            titleBarStyle: 'hidden',
            x: mainWindowState.x,
            y: mainWindowState.y,
            width: mainWindowState.width,
            height: mainWindowState.height,
            icon: path.join(__dirname, '/../dist/images/favicon.ico'),
            frame: true, //Boolean - Specify false to create a Frameless Window
            autoHideMenuBar: true,
            darkTheme: true,
            show: true,
            alwaysOnTop: true,
            'minHeight': 720,
            'minWidth': 1020,
            //titleBarStyle: 'hidden',
            webPreferences: {
                devTools: true
            }
        });

        // and load the index.html of the app.
        win.loadURL(`file://${__dirname}/../dist/index.html`);

        // Emitted when the window is closed.
        win.on('closed', () => {
            win = null;
        });

        win.on('minimize', () => {
            console.log('Window minimized');
            if (process.platform !== 'darwin') {
                win.minimize();
                //win.setSkipTaskbar(true);
            }
        });

        // Let us register listeners on the window, so we can update the state
        // automatically (the listeners will be removed when the window is closed)
        // and restore the maximized or full screen state
        mainWindowState.manage(win);
    }
    /* End Main Window Processing here */


    function closeMainWindow() {
        appIcon.destroy();
        appIcon = null;
        if (process.platform != 'darwin')
            app.quit();
    }

    function restoreMainWindow() {
        appIcon.destroy();
        appIcon = null;
        win.restore();
        win.setSkipTaskbar(false);
    }

    /* Start of System notification tray code */
    function setTray() {
        appIcon = new Tray(path.join(__dirname, '/../dist/images/favicon.ico'));
        appIcon.on('click', restoreMainWindow);
        appIcon.on('double-click', restoreMainWindow);
        var contextMenu = Menu.buildFromTemplate(
            [{
                label: 'Open ' + app.getName(),
                click: restoreMainWindow
            }, {
                label: 'Toggle Developer Tools',
                accelerator: (function() {
                    if (process.platform == 'darwin')
                        return 'Alt+Command+I';
                    else
                        return 'Ctrl+Shift+I';
                })(),
                click: function() {
                    if (win)
                        win.toggleDevTools();
                }
            }, {
                label: 'Toggle Menubar',
                accelerator: (function() {
                    if (process.platform == 'darwin')
                        return 'Alt+Command+M';
                    else
                        return 'Ctrl+Shift+M';
                })(),
                click: function() {
                    if (win.isMenuBarVisible())
                        win.setMenuBarVisibility(false);
                    else
                        win.setMenuBarVisibility(true);
                }
            }, {
                label: 'Reload (same as toolbar reload)',
                accelerator: (function() {
                    if (process.platform == 'darwin')
                        return 'Alt+R';
                    else
                        return 'Ctrl+R';
                })(),
                click: function() {
                    win.reload();
                }
            }, {
                label: 'Check Versions',
                click: function() {
                    var dialogOptions = {
                        type: "info",
                        title: app.getName(),
                        buttons: ["Ok"],
                        message: '******************************************' + '\n' +
                            '    ' + app.getName() + '  ' + app.getVersion() + '\n' +
                            '******************************************' + '\n' +
                            'Node.JS v' + process.versions.node + '\n' +
                            'Electron v' + process.versions.electron + '\n' +
                            'ChromeV8 v' + process.versions.chrome + '\n' +
                            'Platform ' + process.platform + '\n' +
                            'App v' + app.getVersion()
                    };
                    return dialog.showMessageBox(win, dialogOptions);
                }
            }, {
                label: 'Quit ' + app.getName(),
                click: closeMainWindow
            }]
        );
        appIcon.setContextMenu(contextMenu);
        appIcon.setToolTip(app.getName());
    }
    /* End of Setting notification tray processing. */


    app.on('ready', () => {
        app.commandLine.appendSwitch('disable-background-timer-throttling');

        // Run the following from the Console tab of your app's DevTools
        // You should now see a Devtron tab added to the DevTools
        // require('devtron').install();

        setTray();
        createWindow();
        //checkForNewUpdate();
    });

    app.on('window-all-closed', () => {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (win === null) {
            createWindow;
        }
    });


}