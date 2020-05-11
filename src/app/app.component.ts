import { Component, OnInit } from '@angular/core';
import { sourceMoniter } from "src/core/constants/app-constants"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ahex';

  sorcedata = sourceMoniter;
  constructor() {

  }

  ngOnInit() {
    let commonList = {};
    for (let [key, value] of Object.entries(this.sorcedata.sourceMetadata)) {
      if (value.hasOwnProperty("jurisdictions")) {
        if (value.jurisdictions !== null) {
          value.jurisdictions.forEach((item, index) => {
            if(commonList[item.jurisdictionOriginalName]){
              commonList[item.jurisdictionOriginalName].push(key);
            } else{
              commonList[item.jurisdictionOriginalName] = [key];
            }
          })
        }
      }
    }
    console.log('commonList', commonList);
  }
}



