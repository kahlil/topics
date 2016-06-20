import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TopicCloudComponent } from './topic-cloud';
import { TopicDataComponent } from './topic-data';
import { DataService } from './data.service';
import { OddStreamService } from './oddstream.service';
import { EffectsService } from './effects.service';
import { StoreService } from './store.service';
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
  ],
  directives: [
    TopicDataComponent,
    TopicCloudComponent,
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Topics';
  constructor(
    private oddstream: OddStreamService,
    private effects: EffectsService
  ) {}

  ngOnInit() {
    // Feed oddstream with the action creators.
    this.oddstream.setActionCreators(actionCreators);
    // Make sure side effects are run when necessary.
    this.effects.runEffects();
  }
}
