import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListsComponent } from './components/to-do-lists/to-do-lists.component';
import { AddToDoListComponent } from './components/add-to-do-list/add-to-do-list.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';
import { AddToDoItemsComponent } from './components/add-to-do-items/add-to-do-items.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListsComponent,
    AddToDoListComponent,
    ToDoItemsComponent,
    AddToDoItemsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
