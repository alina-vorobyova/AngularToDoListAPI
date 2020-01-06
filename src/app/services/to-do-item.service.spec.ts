import { TestBed } from '@angular/core/testing';

import { ToDoItemService } from './to-do-item.service';

describe('ToDoItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoItemService = TestBed.get(ToDoItemService);
    expect(service).toBeTruthy();
  });
});
