import { ToDoItem } from './to-do-item';

export interface ToDoList {
    id: number;
    title: string;
    color: string;
    toDoItems: ToDoItem[];
}
