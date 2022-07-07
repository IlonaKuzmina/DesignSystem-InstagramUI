import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryBlockComponent } from './secondary-block.component';

describe('SecondaryBlockComponent', () => {
  let component: SecondaryBlockComponent;
  let fixture: ComponentFixture<SecondaryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
