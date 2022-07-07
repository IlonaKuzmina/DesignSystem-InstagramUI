import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestionsComponent } from './sugestions.component';

describe('SugestionsComponent', () => {
  let component: SugestionsComponent;
  let fixture: ComponentFixture<SugestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
