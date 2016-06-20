import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { TagComponent } from '../tag';
import { OddStreamService } from '../oddstream.service';
import { StoreService } from '../store.service';
import { GET_TAGS } from '../action/action-constants';

@Component({
  moduleId: module.id,
  selector: 'app-tag-cloud',
  templateUrl: 'tag-cloud.component.html',
  styleUrls: ['tag-cloud.component.css'],
  directives: [
    TagComponent,
    NgFor,
  ],
})
export class TagCloudComponent implements OnInit {
  private tags: any;

  constructor(
    private oddstream: OddStreamService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.oddstream.dispatch(Observable.of('GET_TAGS'), GET_TAGS);
    this.store.tagCloudState$.subscribe(tags => this.tags = tags);
  }
}
