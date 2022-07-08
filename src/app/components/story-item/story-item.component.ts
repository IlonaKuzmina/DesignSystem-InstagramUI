import { Component } from '@angular/core';
import UsersData from '../../../app/data/users';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss'],
})
export class StoryItemComponent {
  users = UsersData;
}
