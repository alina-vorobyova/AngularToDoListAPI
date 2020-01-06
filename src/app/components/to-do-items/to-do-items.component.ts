import { Component, OnInit } from '@angular/core';
import { ToDoItemService } from 'src/app/services/to-do-item.service';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
})
export class ToDoItemsComponent implements OnInit {

  constructor(private toDoItemService: ToDoItemService) { }

  toDoItem = null;

  ngOnInit() {
  }

  async getItemById(id: number){
    this.toDoItem = await this.toDoItemService.getToDoItemById(id);
  }

}
