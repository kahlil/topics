import { Component, ViewEncapsulation } from '@angular/core';
import { TopicCloudComponent } from './topic-cloud';
import { TopicDataComponent } from './topic-data';
import { DataService } from './data.service';
import { OddStreamService } from './oddstream.service';
import { EffectsService } from './effects.service';
import { StoreService } from './store.service';
import { UtilService } from './util.service';
import { actionCreators } from './action/action-creators';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [
    DataService,
    OddStreamService,
    EffectsService,
    StoreService,
    UtilService,
  ],
  directives: [
    TopicDataComponent,
    TopicCloudComponent,
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Topics';
  constructor(
    oddstream: OddStreamService,
    effects: EffectsService
  ) {
    oddstream.setActionCreators(actionCreators);
    effects.runEffects();
  }
}
