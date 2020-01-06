import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoItemsComponent } from './add-to-do-items.component';

describe('AddToDoItemsComponent', () => {
  let component: AddToDoItemsComponent;
  let fixture: ComponentFixture<AddToDoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToDoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
