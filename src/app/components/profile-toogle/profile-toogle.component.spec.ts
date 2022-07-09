import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileToogleComponent } from './profile-toogle.component';

describe('ProfileToogleComponent', () => {
  let component: ProfileToogleComponent;
  let fixture: ComponentFixture<ProfileToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileToogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
