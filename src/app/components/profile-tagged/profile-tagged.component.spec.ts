import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTaggedComponent } from './profile-tagged.component';

describe('ProfileTaggedComponent', () => {
  let component: ProfileTaggedComponent;
  let fixture: ComponentFixture<ProfileTaggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTaggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTaggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
