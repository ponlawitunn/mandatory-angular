import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-taskform',
    templateUrl: './taskform.component.html',
    styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
    @Output() outSaveState: EventEmitter<any> = new EventEmitter<any>();

    constructor(private taskService: TaskService) { }

    saveState = false;
    taskForm: FormGroup;

    ngOnInit() {
        this.taskForm = new FormGroup({
            title: new FormControl('', [Validators.required,
                                        Validators.minLength(3),
                                        Validators.maxLength(30)]),
            description: new FormControl()
        });
    }

    get title() { return this.taskForm.get('title'); }

    handleClickAddTask() {
        const elmTitle = <HTMLInputElement>document.getElementById('title');
        const elmDescription = <HTMLInputElement>document.getElementById('description');
        const txtTitle = elmTitle.value.trim();
        const txtDescription = elmDescription.value.trim();

        if (txtTitle.length > 0) {
            this.taskService.addTask(txtTitle, txtDescription);
            this.saveState = true;
            this.taskForm.reset();
            this.outSaveState.emit(this.saveState);
        }
        console.log('taskform-Current taskList', this.taskService.taskList); // For testing purpose
    }

    handleToogle() {
        if (this.saveState) {
            const elmTitle = <HTMLInputElement>document.getElementById('title');
            const txtTitle = elmTitle.value.trim();
            if (txtTitle.length > 0 && this.saveState) {
                this.saveState = false;
            }
        }
    }
}
