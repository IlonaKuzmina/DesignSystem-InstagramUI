import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksBlockComponent } from './links-block.component';

describe('LinksBlockComponent', () => {
  let component: LinksBlockComponent;
  let fixture: ComponentFixture<LinksBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
