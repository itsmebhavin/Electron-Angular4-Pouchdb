import { Component, OnInit } from '@angular/core';
import {Config} from "../../app.config";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [Config]
})
export class HeaderComponent implements OnInit {

   title: String = "";
  constructor(private _config: Config ) {
        this._config.load().then(( data: any ) => {
            document.title = document.title.replace(/Loading(\.\.\.)?/, data.ApplicationHeader);
            this.title =  data.ApplicationHeader;
        });
    }

  ngOnInit() {
  }

}
