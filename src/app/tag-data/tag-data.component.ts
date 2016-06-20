import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  moduleId: module.id,
  selector: 'app-tag-data',
  templateUrl: 'tag-data.component.html',
  styleUrls: ['tag-data.component.css']
})
export class TagDataComponent implements OnInit {
  topicData: any;

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.store.tagDataState$.subscribe(data => this.topicData = data);
  }
}
