import { Component, OnInit } from '@angular/core';
import {AdService} from '../app/categories/ad.service';
import {AdItem} from '../app/categories/ad-item';

import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app.scss']

//  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  ads: AdItem[];

  constructor(private adService: AdService){}
  ngOnInit(){
  this.ads = this.adService.getAds();
  }
}
