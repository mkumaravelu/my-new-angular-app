import { Component, Input }  from '@angular/core';

import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div class="trainer-profile">
      <h3>Q & A can be added, deleted</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this trainer today!</strong>
    </div>
  `
})
export class TrainerProfileComponent implements AdComponent {
  @Input() data: any;
}


