import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../app.config';
import { Subject, ReplaySubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

const STORAGE_CURRENT_THEME = 'currentTheme';

/**
 * ThemeService (Injectable) class -- Handles switching of the various application themes.
 */
@Injectable()
export class ThemeService {

    public static themesData: { [name: string]: string };
    public static themes: string[];
    public static defaultTheme: string;
    public static currentTheme: string;

    public static themeNameStream: ReplaySubject<string[]>;
    public static currentThemeStream: ReplaySubject<string>;

    constructor(
        private http: Http,
        private config: Config ) {

        try {
            ThemeService.currentTheme = localStorage.getItem( STORAGE_CURRENT_THEME );
        } catch ( e ) { }

        if ( !ThemeService.themeNameStream ) {
            ThemeService.themeNameStream = new ReplaySubject<string[]>( 1 );
        }
        if ( !ThemeService.currentThemeStream ) {
            ThemeService.currentThemeStream = new ReplaySubject<string>( 1 );
        }

        this.config.load().then(( config: any ) => {
            ThemeService.themesData = config.themes;
            ThemeService.themes = Object.keys( config.themes );
            ThemeService.defaultTheme = config.defaultTheme;
            if ( !ThemeService.currentTheme ) {
                ThemeService.currentTheme = ThemeService.defaultTheme;
            }
            ThemeService.themeNameStream.next( ThemeService.themes );
            ThemeService.currentThemeStream.next( ThemeService.currentTheme );

            this.setTheme( ThemeService.currentTheme );

        });
    }

    // private i = 0;
    // test() {
    //     // Cycle through all themes, one a second
    //     this.i++;
    //     var ks = Object.keys( ThemeService.themesData );
    //     this.setTheme( ks[this.i % ks.length] );
    //     setTimeout(() => this.test(), 1000 );
    // }

    setTheme( name ) {
        if ( !ThemeService.themesData[name] ) {
            console.log( 'Tried to set invalid theme: ', name );
            return false;
        }
        ThemeService.currentTheme = name;

        document.getElementById( 'theme-css' )['href'] = ThemeService.themesData[name];
        localStorage.setItem( STORAGE_CURRENT_THEME, name );

        ThemeService.currentThemeStream.next( ThemeService.currentTheme );
        return true;
    }


}
