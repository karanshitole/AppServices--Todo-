import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/student.interface';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
 studentArr!:Array<Istudent>

  constructor( private _studentService:StudentService ) { }

  ngOnInit(): void {
    
    this.studentArr =this._studentService.fetchAllStudent()
  }

}
