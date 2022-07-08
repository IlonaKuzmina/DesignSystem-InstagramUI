import { Component, Input } from '@angular/core';
import { User } from '../../data/users';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss'],
})
export class PostHeaderComponent {
  @Input()
  user!: User;
}
