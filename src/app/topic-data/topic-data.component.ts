import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { StoreService } from '../store.service';

@Component({
  moduleId: module.id,
  selector: 'app-topic-data',
  templateUrl: 'topic-data.component.html',
  styleUrls: ['topic-data.component.css'],
  directives: [NgIf]
})
export class TopicDataComponent implements OnInit {
  topicData: any;

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.store.topicDataState$.subscribe(data => this.topicData = data);
  }
}
