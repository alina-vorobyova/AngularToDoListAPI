import { Component, OnInit } from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { ToDoList } from 'src/app/models/to-do-list';
import { log } from 'util';

@Component({
  selector: 'app-to-do-lists',
  templateUrl: './to-do-lists.component.html',
  styleUrls: ['./to-do-lists.component.scss']
})
export class ToDoListsComponent implements OnInit {

  toDoLists = Array<ToDoList>();

  constructor(private toDoListService: ToDoListService) { }

  async ngOnInit() {
    try {
      this.toDoLists = await this.toDoListService.getAllToDoLists();
      console.log(this.toDoLists);

    } catch (error) {
      console.log(error);

    }
  }

}
