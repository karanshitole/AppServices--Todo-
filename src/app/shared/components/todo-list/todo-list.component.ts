import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodos } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArr !:Array<Itodos>

  constructor(
    private _todoService :TodoService
  ) { }

  ngOnInit(): void {
    // this._todoService= new TodoService()
    this.todoArr =this._todoService.fetchAllTodos()
  }

}
