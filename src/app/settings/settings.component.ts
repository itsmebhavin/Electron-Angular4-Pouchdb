import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  showGeneral = true;
  showShortcuts = false;
  showAbout = false;
  showHelp = false;
  showReleaseNotes = false;

  constructor() { }

  ngOnInit() {
  }

}
