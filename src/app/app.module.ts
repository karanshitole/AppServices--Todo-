import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { TodoManageComponent } from './shared/components/todo-manage/todo-manage.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { StudentTableComponent } from './shared/components/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoManageComponent,
    TodoFormComponent,
    StudentFormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
