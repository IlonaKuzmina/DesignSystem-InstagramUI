import { Component } from '@angular/core';
import UsersData from '../../../app/data/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  users = UsersData;
}
