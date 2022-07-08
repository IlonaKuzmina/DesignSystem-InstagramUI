import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/data/users';

@Component({
  selector: 'app-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.scss'],
})
export class PostFooterComponent {
  @Input() user!: User;

  likes = 0;
  postLiked = false;
  postSaved = false;
  testcomment = '';
  commentsCount = 0;
  comments: string[] = [];

  clickLike(): void {
    if (!this.postLiked) {
      this.likes++;
      this.postLiked = true;
    } else {
      this.likes--;
      this.postLiked = false;
    }
  }

  clickSave(): void {
    this.postSaved = !this.postSaved;
    console.log('butn works');
  }

  addComment(comment: string): void {
    this.comments = [...this.comments, comment];
    this.commentsCount++;
  }
}
