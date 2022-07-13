import { Component, OnInit } from '@angular/core';
import UsersData from 'src/app/data/users';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
users = UsersData;

  constructor() { }

  ngOnInit(): void {
  }

}
