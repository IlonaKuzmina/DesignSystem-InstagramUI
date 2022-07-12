import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToogleComponent } from './user-toogle.component';

describe('UserToogleComponent', () => {
  let component: UserToogleComponent;
  let fixture: ComponentFixture<UserToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserToogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
