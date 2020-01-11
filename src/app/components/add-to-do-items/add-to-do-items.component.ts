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


  constructor(private toDoItemService: ToDoItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  Listid: number;

  itemid: number;

  todoitem: ToDoItem;

  toDoItemForm: FormGroup;

  get title() { return this.toDoItemForm.get('title') as FormControl }
  get text() { return this.toDoItemForm.get('text') as FormControl }
  get deadline() { return this.toDoItemForm.get('deadline') as FormControl }
  get time() { return this.toDoItemForm.get('time') as FormControl }

  async ngOnInit() {
    this.Listid = +this.activatedRoute.snapshot.paramMap.get('listid');
    this.itemid = +this.activatedRoute.snapshot.paramMap.get('itemid');

    this.toDoItemForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      text: new FormControl(null, [Validators.maxLength(1000)]),
      deadline: new FormControl(null, null),
      time: new FormControl(null, null)
    });
    if (this.itemid != 0) {
      this.todoitem = await this.toDoItemService.getToDoItemById(this.itemid);

      if (this.todoitem != null) {
        this.todoitem.id = this.itemid;
        this.title.setValue(this.todoitem.title);
        this.text.setValue(this.todoitem.text);
        this.deadline.setValue(formatDate(this.todoitem.deadline)),
        this.time.setValue(formatTime(this.todoitem.deadline))
      }
    }
  }


  async onFormSubmit() {
    let item = this.toDoItemForm.value;
    item.toDoListId = this.Listid;
    if (this.time.value != null) {
      let time = this.time.value.toString().split(":");
      let datetime = new Date(this.deadline.value);
      datetime.setHours(+time[0]);
      datetime.setMinutes(+time[1] + datetime.getTimezoneOffset());
      item.deadline = datetime;
    }
    if (this.itemid != 0) {
       item.id = this.itemid;
       await this.toDoItemService.replaceToDoItem(this.itemid, item);
       this.router.navigate(['/toDoLists']);
    }
    else {
      await this.toDoItemService.createToDoItem(item);
      this.router.navigate(['/toDoLists']);
    }

  }

}


function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}



function formatTime(date) {
  var d = new Date(date),
    hour = d.getHours(),
    minute = d.getMinutes();
  var h = hour.toString();
  var m = minute.toString();
  if (hour < 10)
    h = '0' + hour;

  if (minute < 10)
    m = '0' + minute;

  return [h, m].join(':');
}




