import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToDoList } from '../models/to-do-list';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  readonly apiUrl: string = environment.toDoAppApiUrl;

  constructor(private httpClient: HttpClient) { }

 getAllToDoLists() : Promise<Array<ToDoList>> {
    return this.httpClient.get<Array<ToDoList>>(`${this.apiUrl}/todolist`).toPromise();
  }

  getListById(id: number) : Promise<ToDoList> {
    return this.httpClient.get<ToDoList>(`${this.apiUrl}/todolist/${id}`).toPromise();
  }

  createToDoList(todolist: ToDoList) : Promise<ToDoList> {
    return this.httpClient.post<ToDoList>(`${this.apiUrl}/todolist`, todolist).toPromise();
  }


  replaceToDoList(id: number, todolist: ToDoList) : Promise<ToDoList> {
      return this.httpClient.put<ToDoList>(`${this.apiUrl}/todolist/${id}`, todolist).toPromise();
  }

  deleteToDoList(id: number) : Promise<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/todolist/${id}`).toPromise();
  }


}

