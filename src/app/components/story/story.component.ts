import { Component, Input } from '@angular/core';
import { User } from 'src/app/data/users';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent {
  @Input()
  backgroundColor?: string;

  @Input() user!: User;
}
