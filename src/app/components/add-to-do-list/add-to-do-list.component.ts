import { Component, OnInit } from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { ToDoList } from 'src/app/models/to-do-list';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-to-do-list',
  templateUrl: './add-to-do-list.component.html',
  styleUrls: ['./add-to-do-list.component.scss']
})
export class AddToDoListComponent implements OnInit {
 

  constructor(private toDoListService: ToDoListService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  toDoListForm: FormGroup;

  Listid: number;

  todolist: ToDoList;

  get title() { return this.toDoListForm.get('title') as FormControl }
  get color() { return this.toDoListForm.get('color') as FormControl }

  async ngOnInit() {
    this.Listid = +this.activatedRoute.snapshot.paramMap.get('listid');
    
    this.toDoListForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      color: new FormControl(null, [Validators.pattern("^#[0-9,a-f,A-F]{6}$")])
    });
    
    if (this.Listid != 0) {
        this.todolist = await this.toDoListService.getListById(this.Listid);

        if (this.todolist != null) {
          this.title.setValue(this.todolist.title);
          this.color.setValue(this.todolist.color);
        }
    }

  }


  async onFormSubmit() {
      let todolist = this.toDoListForm.value;
      if (this.Listid != 0) {
          todolist.id = this.Listid;
          await this.toDoListService.replaceToDoList(this.Listid, todolist);
          this.router.navigate(['/toDoLists']);
      }
      else {
        await this.toDoListService.createToDoList(todolist);
        this.router.navigate(['/toDoLists']);
      }

      
  }

}
