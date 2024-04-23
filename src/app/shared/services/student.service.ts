import { Injectable } from "@angular/core";
import { Istudent } from "../models/student.interface";



@Injectable({
    providedIn :'root'
})


export class StudentService{
    studentArr:Array<Istudent>=[
        {
            fname:"karan",
            lname:"shitole",
            email:"shitolekaran11@gmail.com",
            contact:9049826265
        },
        {
            fname:"Aaru",
            lname:"shitole",
            email:"shitoleaaru09@gmail.com",
            contact:9049826265
        },
        {
            fname:"sakshi",
            lname:"shitole",
            email:"shitolesakshi11@gmail.com",
            contact:9049826265
        }
    ]
    fetchAllStudent(): Array <Istudent>{
       
        return this.studentArr;
        }
        
        createStudent(student : Istudent){
           // API call to create new TODO Item
           //student={...student, id : this._uuid.uuid()}
         this.studentArr.push(student)
         
        }
}