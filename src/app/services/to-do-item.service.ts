import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToDoItem } from '../models/to-do-item';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {

  readonly apiUrl: string = environment.toDoAppApiUrl;

  constructor(private httpClient: HttpClient) { }


  getAllToDoItems() : Promise<Array<ToDoItem>> {
    return this.httpClient.get<Array<ToDoItem>>(`${this.apiUrl}/todoitems`).toPromise();
  }

  getToDoItemById(id: number) : Promise<ToDoItem> {
    return this.httpClient.get<ToDoItem>(`${this.apiUrl}/todoitem/${id}`).toPromise();
  }
  

  createToDoItem(todoitem: ToDoItem) : Promise<ToDoItem> {
    return this.httpClient.post<ToDoItem>(`${this.apiUrl}/todoitem`, todoitem).toPromise();
  }

  replaceToDoItem(id: number, todoitem: ToDoItem) : Promise<ToDoItem> {
    return this.httpClient.put<ToDoItem>(`${this.apiUrl}/todoitem/${id}`, todoitem).toPromise();
}

deleteToDoItem(id: number) : Promise<void> {
  return this.httpClient.delete<void>(`${this.apiUrl}/todoitem/${id}`).toPromise();
}

}
