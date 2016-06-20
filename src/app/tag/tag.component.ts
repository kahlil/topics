import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CLICK_TAG } from '../action/action-constants';
import { OddStreamService } from '../oddstream.service';

@Component({
  moduleId: module.id,
  selector: 'app-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.css'],
})
export class TagComponent {
  @Input() label: string;
  @Input() size: number;
  @Input() color: number;
  @Input() topicId: number;
  @Output() topicClick$ = new EventEmitter();

  constructor(private oddstream: OddStreamService) {}

  topicClick() {
    this.oddstream.dispatch(this.topicClick$, CLICK_TAG);
    this.topicClick$.emit(this.topicId);
  }
}
