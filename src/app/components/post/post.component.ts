import { Component } from '@angular/core';
import UsersData from '../../../app/data/users';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  users = UsersData;
}
