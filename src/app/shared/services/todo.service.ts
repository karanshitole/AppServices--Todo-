import { Injectable, inject } from "@angular/core";
import { Itodos } from "../models/todo.interface";
import { UuidService } from "./uuid.service";






@Injectable({
   providedIn :'root'
})  
export class TodoService{
   todoArray : Array<Itodos>= [{
    
        skills:'Angular',
        id:"1"
   },
   {
    skills:'javascript',
    id:"2"
   },
   {
    skills:'flex',
    id:"3"
   }
]
private _uuid = inject(UuidService)
constructor(){

}
fetchAllTodos(): Array <Itodos>{
// API call to fetch TODO date form DB
return this.todoArray;
}

createTodo(todo : Itodos){
   // API call to create new TODO Item
   todo={...todo, id : this._uuid.uuid()}
 this.todoArray.push(todo)
 
}

}