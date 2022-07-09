import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-toogle',
  templateUrl: './profile-toogle.component.html',
  styleUrls: ['./profile-toogle.component.scss'],
})
export class ProfileToogleComponent {
  selectedPost = true;
  selectedSave = false;
  selectedTagged = false;

  clickHandler(a: string): void {
    if (a === 'post') {
      this.selectedPost = true;
      this.selectedSave = false;
      this.selectedTagged = false;
    } else if (a === 'save') {
      this.selectedPost = false;
      this.selectedSave = true;
      this.selectedTagged = false;
    } else {
      this.selectedPost = false;
      this.selectedSave = false;
      this.selectedTagged = true;
    }
  }
}
