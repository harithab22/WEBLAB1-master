import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLandingPageComponent } from './book-landing-page.component';

describe('BookLandingPageComponent', () => {
  let component: BookLandingPageComponent;
  let fixture: ComponentFixture<BookLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
