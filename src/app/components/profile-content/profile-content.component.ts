import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss'],
})
export class ProfileContentComponent {
  selectedPost: boolean = true;
  selectedSave: boolean = false;
  selectedTagged: boolean = false;
}
