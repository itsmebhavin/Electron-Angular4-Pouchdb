import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../_services/theme/theme.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  themeNames: string[];
  currentTheme: string;

  constructor(private themeService: ThemeService) {
    ThemeService.themeNameStream.subscribe(themeNames => {
      this.themeNames = themeNames;
    });
    ThemeService.currentThemeStream.subscribe(currentTheme => {
      this.currentTheme = currentTheme;
    });
  }
  setTheme(themeName: string) {
    this.themeService.setTheme(themeName);
  }

  ngOnInit() {
  }

}
