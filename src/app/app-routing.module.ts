import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListsComponent } from './components/to-do-lists/to-do-lists.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';
import { AddToDoListComponent } from './components/add-to-do-list/add-to-do-list.component';
import { AddToDoItemsComponent } from './components/add-to-do-items/add-to-do-items.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {path: "", redirectTo: "toDoLists", pathMatch: "full"},
  {path: "toDoLists",  component: ToDoListsComponent},
  {path: "toDoItems", component: ToDoItemsComponent},
  {path: "addToDoList" , component: AddToDoListComponent},
  {path: "editToDoList/:listid" , component: AddToDoListComponent},
  {path: "addToDoItems/:listid" , component: AddToDoItemsComponent},
  {path: "editToDoItem/:listid/:itemid" , component: AddToDoItemsComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
