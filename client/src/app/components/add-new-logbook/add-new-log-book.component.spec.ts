import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLogBookComponent } from './add-new-log-book.component';

describe('AddNewTodoComponent', () => {
  let component: AddNewLogBookComponent;
  let fixture: ComponentFixture<AddNewLogBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewLogBookComponent]
    });
    fixture = TestBed.createComponent(AddNewLogBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
