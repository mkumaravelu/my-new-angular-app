import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {CategoriesService} from '../services/categories.service';
//import { reject } from 'q';

@Injectable()
export class CategoriesResolver implements Resolve<any> {

    constructor(private categoriesService: CategoriesService){

    }

    resolve()   {

    return new Promise(

        (resolve,reject)=> {

            let breadcrumbs = [{url:'/',label:'Categories'}];

    //get categories from locl json file

            this.categoriesService.getCategories()
            .then(
                categories => {
                    return resolve({
                        categories:categories,
                        breadcrumbs:breadcrumbs
                    });
                },
                err => {
                    return resolve(null);
                }

            )
                });
            }
}
