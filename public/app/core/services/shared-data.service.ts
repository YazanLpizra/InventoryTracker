import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Part } from '../models/Part';

@Injectable()
export class SharedDataService {
    private partSubject = new BehaviorSubject<Part>(undefined);

    getPart(): Observable<Part> {
        return this.partSubject.asObservable();
    }

    setPart(part: Part): void {
        this.partSubject.next(part);
    }
}