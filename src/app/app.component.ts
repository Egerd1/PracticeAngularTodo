import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  inputTodo: string = "";
  constructor() {}

  ngOnInit(): void {
    this.todos = [
       {
        content: 'Add todo',
        completed: false
      },
      {
        content: 'If ready',
        completed: true
      } 
    ]
  }
   
  toggleDone(id: number){
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((v, i) => i !== id);

  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }
}
