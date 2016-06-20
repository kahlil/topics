import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.css']
})
export class TagComponent {
  @Input() label: string;
  @Input() size: number;
  @Input() color: number;
}
