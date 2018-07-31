import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import {CategoryModel} from './category.model';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

 categories: CategoryModel[];

 constructor(
    private router:Router,
    private route:ActivatedRoute
 ) { }

  ngOnInit():void {
    this.route.data.subscribe(routeData=>
    {
      let data = routeData['data']
      if(data)
      {
        this.categories= data.categories;
      }

    }
    
    )
  }

}
