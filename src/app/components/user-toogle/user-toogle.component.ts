import { Component } from '@angular/core';

@Component({
  selector: 'app-user-toogle',
  templateUrl: './user-toogle.component.html',
  styleUrls: ['./user-toogle.component.scss'],
})
export class UserToogleComponent {
  selectedPost = true;
  selectedGuides = false;
  selectedReels = false;
  selectedVideos = false;
  selectedTagged = false;

  clickHandler(a: string): void {
    if (a === 'post') {
      this.selectedPost = true;
      this.selectedGuides = false;
      this.selectedReels = false;
      this.selectedVideos = false;
      this.selectedTagged = false;
    } else if (a === 'guides') {
      this.selectedPost = false;
      this.selectedGuides = true;
      this.selectedReels = false;
      this.selectedVideos = false;
      this.selectedTagged = false;
    } else if (a === 'reels') {
      this.selectedPost = false;
      this.selectedGuides = false;
      this.selectedReels = true;
      this.selectedVideos = false;
      this.selectedTagged = false;
    } else if (a === 'videos') {
      this.selectedPost = false;
      this.selectedGuides = false;
      this.selectedReels = false;
      this.selectedVideos = true;
      this.selectedTagged = false;
    } else {
      this.selectedPost = false;
      this.selectedGuides = false;
      this.selectedReels = false;
      this.selectedVideos = false;
      this.selectedTagged = true;
    }
  }
}
