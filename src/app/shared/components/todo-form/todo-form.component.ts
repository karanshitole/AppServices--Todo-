import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
private _todoService =inject(TodoService)
  constructor( 
    // private _todoService : TodoService
  ) { }

  ngOnInit(): void {
  }
  onTodoAdd(todoForm :NgForm){
    if(todoForm.valid){
      let obj = todoForm.value;
      this._todoService.createTodo(obj)
      console.log(obj);  
    }
  }

}
