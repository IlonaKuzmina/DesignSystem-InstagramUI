import { Component } from '@angular/core';
import UsersData from '../../../app/data/users';

@Component({
  selector: 'app-messenger-content-left',
  templateUrl: './messenger-content-left.component.html',
  styleUrls: ['./messenger-content-left.component.scss'],
})
export class MessengerContentLeftComponent {
  users = UsersData;
}
