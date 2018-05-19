import { Component, Input } from '@angular/core';
import { Task, StatusType, statusTypes } from '../constants';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() task: Task;
    @Input() taskStatus: StatusType;

    constructor(private taskService: TaskService) { }

    compStatusTypes: StatusType[] = statusTypes;

    handleChange(taskId: number, status: StatusType) {
        this.taskService.updateTask(taskId, status);
    }

    handleDeleteTask(taskId: number) {
        this.taskService.deleteTask(taskId);
    }
}
