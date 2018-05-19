import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TaskformComponent } from './taskform/taskform.component';
import { TasklistComponent } from './tasklist/tasklist.component';

import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskboardComponent,
    TaskformComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
