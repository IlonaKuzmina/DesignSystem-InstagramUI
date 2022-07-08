import { Component } from '@angular/core';
import UsersData from '../../../app/data/users';

@Component({
  selector: 'app-follows',
  templateUrl: './follows.component.html',
  styleUrls: ['./follows.component.scss'],
})
export class FollowsComponent {
  users = UsersData;
}
