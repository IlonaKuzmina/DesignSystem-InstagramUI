import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryBlockComponent } from './primary-block.component';

describe('PrimaryBlockComponent', () => {
  let component: PrimaryBlockComponent;
  let fixture: ComponentFixture<PrimaryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
