import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task, TaskList, StatusType } from './constants';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    // add class properties for:
    //
    // a task id counter
    // an internal array of Task objects
    // an instance of BehaviorSubject

    public taskList: TaskList = []; // Using public scope for testing purpose.You should use private
    private objBehaviorSubject: BehaviorSubject<any>;

    constructor() {
        this.objBehaviorSubject = new BehaviorSubject(this.taskList);
    }

    getTasks(): BehaviorSubject<TaskList> {
        return this.objBehaviorSubject;
    }

    filteredTasks(status: StatusType, taskList: TaskList) {
        return taskList.filter((item: Task) => item.status === status);
    }

    updateTask(id: number, status: StatusType) {
        // complete the code to update a task's status...
        const itemIndex = this.taskList.findIndex((item: Task) => item.id === id);
        this.taskList = this.taskList.map((item, index) => item.id === id && index === itemIndex ? { ...item, status: status } : item);
        return this.objBehaviorSubject.next(this.taskList);
    }

    addTask(inTitle: string, inDescription: string) {
        // complete the code to add a task...
        this.taskList = [...this.taskList, {
            id: Date.now(),
            status: StatusType.NotStarted,
            title: inTitle,
            description: inDescription
        }];
        return this.objBehaviorSubject.next(this.taskList);
    }

    deleteTask(taskId: number) {
        this.taskList = this.taskList.filter((item: Task) => item.id !== taskId);
        return this.objBehaviorSubject.next(this.taskList);
    }
}
