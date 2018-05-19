import { Injectable } from '@angular/core';
import { StatusType } from './constants';

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    constructor() { }

    getStatusTypes(): string[] {
        const statusTypes: string[]  = [];

        for (const st in StatusType) {
            if (StatusType.hasOwnProperty(st)) {
                statusTypes.push(StatusType[st]);
            }
        }

        return statusTypes;
    }
}
