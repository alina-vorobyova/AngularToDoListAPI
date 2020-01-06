import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoListComponent } from './add-to-do-list.component';

describe('AddToDoListComponent', () => {
  let component: AddToDoListComponent;
  let fixture: ComponentFixture<AddToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
