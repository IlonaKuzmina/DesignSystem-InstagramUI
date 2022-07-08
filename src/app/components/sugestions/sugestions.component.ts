import { Component, OnInit } from '@angular/core';
import UsersData from '../../../app/data/users';

@Component({
  selector: 'app-sugestions',
  templateUrl: './sugestions.component.html',
  styleUrls: ['./sugestions.component.scss'],
})
export class SugestionsComponent {
  users = UsersData;
}
