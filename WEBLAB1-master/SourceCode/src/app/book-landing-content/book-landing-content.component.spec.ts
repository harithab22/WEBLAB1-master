import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLandingContentComponent } from './book-landing-content.component';

describe('BookLandingContentComponent', () => {
  let component: BookLandingContentComponent;
  let fixture: ComponentFixture<BookLandingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLandingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLandingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
