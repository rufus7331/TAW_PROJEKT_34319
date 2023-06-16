import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogBookComponent } from './log-book.component';

describe('TodosComponent', () => {
  let component: LogBookComponent;
  let fixture: ComponentFixture<LogBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogBookComponent]
    });
    fixture = TestBed.createComponent(LogBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
