import { Component, OnInit } from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';
import { ToDoList } from 'src/app/models/to-do-list';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-do-list',
  templateUrl: './add-to-do-list.component.html',
  styleUrls: ['./add-to-do-list.component.scss']
})
export class AddToDoListComponent implements OnInit {

  constructor(private toDoListService: ToDoListService,
    private router: Router) { }

  toDoListForm: FormGroup;

  get title() { return this.toDoListForm.get('title') as FormControl }
  get color() { return this.toDoListForm.get('color') as FormControl }

  ngOnInit() {
    this.toDoListForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      color: new FormControl(null, [Validators.pattern("^#[0-9,a-f,A-F]{6}$")])
    });
  }


  async onFormSubmit() {
      await this.toDoListService.createToDoList(this.toDoListForm.value);
      this.router.navigate(['/toDoLists']);
  }

}
