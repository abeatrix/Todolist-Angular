import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // title = "Todo List in Angular"

  todos: Todo[];

  inputTodos:String = "";

  constructor() { }

  ngOnInit(): void { // like cycle in react, new on initiate
    this.todos = [
      {
        content: 'walk the dog',
        completed: false
      },
      {
        content: 'feed the dog',
        completed: true
      },
    ]
  }

  toggleDone (id: number): void { //void = return nothing
    this.todos.map((todo, i) => {
      if (i ==id ) todo.completed = !todo.completed;
      return todo;
    })
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(): void {
    this.todos.push({
      content: this.inputTodos,
      compelted: false
    });

    this.inputTodos = "" //reset the form after submit
  }

}
