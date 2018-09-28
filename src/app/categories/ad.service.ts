import { Injectable} from '@angular/core';

import { TrainerJobAdComponent} from './trainer-job-ad.component';
import { TrainerProfileComponent } from './trainer-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
    getAds() {
        /*return [

          new AdItem(TrainerProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
    
          new AdItem(TrainerProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),
    
          new AdItem(TrainerJobAdComponent,   {headline: 'Hiring for several positions',
                                            body: 'Submit your resume today!'}),
    
          new AdItem(TrainerJobAdComponent,   {headline: 'Openings in all departments',
                                            body: 'Apply today'}),
        ];*/

        return [

   
          new AdItem(TrainerJobAdComponent,   {headline: 'Feedback encouraged',
                                            body: ''}),
    
          new AdItem(TrainerJobAdComponent,   {headline: 'User Manual Embedded',
                                            body: ''}),
        ];
      }

}
