import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CLICK_TOPIC } from '../action/action-constants';
import { OddStreamService } from '../oddstream.service';

@Component({
  moduleId: module.id,
  selector: 'app-topic',
  templateUrl: 'topic.component.html',
  styleUrls: ['topic.component.css'],
})
export class TopicComponent {
  @Input() label: string;
  @Input() size: number;
  @Input() color: number;
  @Input() topicId: number;
  @Output() topicClick$ = new EventEmitter();

  constructor(private oddstream: OddStreamService) {}

  topicClick() {
    this.oddstream.dispatch(this.topicClick$, CLICK_TOPIC);
    this.topicClick$.emit(this.topicId);
  }
}
