import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {CategoriesService} from '../services/categories.service';
import { reject } from 'q';

@Injectable()
export class CategoriesResolver implements Resolve<any> {

    constructor(private categoriesService: CategoriesService){

    }

    resolve()   {

    return new Promise(

        (resolve,reject)=> {

            let breadcrumps = {url:'/',label:'Categories'};

    //get categories from locl json file

            this.categoriesService.getCategories()
            .then(
                categories => {
                    return resolve({
                        categories:categories,
                        breadcrumps:breadcrumps
                    });
                },
                err => {
                    return resolve(null);
                }

            )
                });
            }
}
