import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaggedComponent } from './user-tagged.component';

describe('UserTaggedComponent', () => {
  let component: UserTaggedComponent;
  let fixture: ComponentFixture<UserTaggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTaggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTaggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
