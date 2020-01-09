import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDoItemService } from 'src/app/services/to-do-item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/app/models/to-do-item';

@Component({
  selector: 'app-add-to-do-items',
  templateUrl: './add-to-do-items.component.html',
  styleUrls: ['./add-to-do-items.component.scss']
})
export class AddToDoItemsComponent implements OnInit {

 
  constructor(private toDoListService: ToDoItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  id: number;

  toDoItemForm: FormGroup;

  get title() { return this.toDoItemForm.get('title') as FormControl }
  get text() { return this.toDoItemForm.get('text') as FormControl }
  get deadline() { return this.toDoItemForm.get('deadline') as FormControl }
  get time() { return this.toDoItemForm.get('time') as FormControl }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('listid');
    this.toDoItemForm = new FormGroup({
       title: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
       text: new FormControl(null,  [Validators.maxLength(1000)]),
       deadline: new FormControl(null, null),
       time: new FormControl(null, null)
    });
  }

  
  async onFormSubmit() {
    let time = this.time.value.toString().split(":");
    let datetime = new Date(this.deadline.value);
    datetime.setHours(+time[0]);
    datetime.setMinutes(+time[1] + datetime.getTimezoneOffset());
    
    let item = this.toDoItemForm.value;
    item.toDoListId = this.id;
    item.deadline = datetime;
    await this.toDoListService.createToDoItem(item);
    this.router.navigate(['/toDoLists']);
}

}
