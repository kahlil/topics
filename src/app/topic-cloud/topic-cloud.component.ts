import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { TopicComponent } from '../topic';
import { OddStreamService } from '../oddstream.service';
import { StoreService } from '../store.service';
import { GET_TOPICS } from '../action/action-constants';

@Component({
  moduleId: module.id,
  selector: 'app-topic-cloud',
  templateUrl: 'topic-cloud.component.html',
  styleUrls: ['topic-cloud.component.css'],
  directives: [
    TopicComponent,
    NgFor,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicCloudComponent implements OnInit {
  private topics: any;

  constructor(
    private oddstream: OddStreamService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.oddstream.dispatch(Observable.of('GET_TOPICS'), GET_TOPICS);
    this.topics = this.store.topicCloudState$;
  }
}
