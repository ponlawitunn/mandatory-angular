import { Component, Input } from '@angular/core';
import { TaskList, StatusType } from '../constants';

@Component({
    selector: 'app-tasklist',
    templateUrl: './tasklist.component.html',
    styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
    @Input() taskStatus: StatusType;
    @Input() taskList: TaskList;

    constructor() { }
}
