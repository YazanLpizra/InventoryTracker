'use strict';

import { Component } from '@angular/core';

import { Part } from './part'

@Component({
    selector: 'part-form',
    templateUrl: 'part-form.component.html'
})
export class PartFormComponent {
    model = new Part("ajsdhjlam561", "0001", "fuel pump");
    submitted = false;
    
    onSubmit() {
        this.submitted = true;
    }
    get diagnostic() {
        return JSON.stringify(this.model, null, 2);
    }
}