'use strict';

(function () {
    chrome.runtime.onConnect.addListener(function (portExtension) {
        portExtension.onMessage.addListener(function (messageExtension) {
            var portNative = chrome.runtime.connectNative('com.printerlogic.host.native.client');
            var onMessageCalled = false;
            portNative.onDisconnect.addListener(function () {
                if (onMessageCalled) {
                    return;
                }
                var message = 'Could not communicate with the PrinterLogic client. It may not be installed or running.';
                portExtension.postMessage({
                    state: 'error',
                    message: message,
                    id: messageExtension.id
                });
            });
            portNative.onMessage.addListener(function (messageNative) {
                onMessageCalled = true;
                portExtension.postMessage({
                    state: messageNative.state,
                    message: messageNative.message,
                    id: messageExtension.id
                });
            });
            portNative.postMessage({
                command: messageExtension.command,
                parameters: messageExtension.parameters
            });
        });
    });
    chrome.runtime.onInstalled.addListener(function () {
        chrome.tabs.query({}, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                var id = tabs[i].id;
                chrome.tabs.executeScript(id, {'file': 'jquery-2.1.4.min.js'}, function(id) {
                    return function() {
                        chrome.tabs.executeScript(id, {'file': 'content.js'});
                    }
                }(id));
            }
        });
    });
})();
