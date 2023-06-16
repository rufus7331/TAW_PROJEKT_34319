import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLogBookComponent } from './edit-log-book.component';

describe('EditTodoComponent', () => {
  let component: EditLogBookComponent;
  let fixture: ComponentFixture<EditLogBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLogBookComponent]
    });
    fixture = TestBed.createComponent(EditLogBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
