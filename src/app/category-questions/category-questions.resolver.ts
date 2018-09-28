import {Injectable} from '@angular/core';
import {Resolve,ActivatedRouteSnapshot} from "@angular/router";
import {QuestionsService} from '../services/questions.service';
import {CategoriesService} from '../services/categories.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CategoryQuestionsResolver implements Resolve<any>
{

    constructor(private questionsService: QuestionsService,
        private categoriesService: CategoriesService){}


    resolve (route:ActivatedRouteSnapshot) {

        return new Promise((resolve,reject)=> {
            let category_slug = route.paramMap.get('categorySlug');
            Observable.forkJoin(
                this.categoriesService.getCategoryBySlug(category_slug),
                this.questionsService.getQuestionsByCategory(category_slug)
            ).subscribe(
                data => {
                    let breadcrumbs = [
                        { url: '/', label:'Categories' },
                        { url: 'questions/about/' + category_slug, label:data[0].title}
                    ];

                    return resolve({
                        questions: data[1],
                        category_title:data[0].title,
                        category_slug:category_slug,
                        breadcrumbs:breadcrumbs
                    });
                },

                err=>{
                    console.log(err)
                    return resolve(null)
                });

                })

        }
      }

