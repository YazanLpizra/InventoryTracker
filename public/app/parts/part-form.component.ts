'use strict';

import { Component, OnInit } from '@angular/core';

import { Part } from './part';
import { PartsApiService } from './partsApi.service';

@Component({
    selector: 'part-form',
    templateUrl: 'app/parts/part-form.component.html'
})
export class PartFormComponent implements OnInit {

    model = new Part('', '0001', 'fuel pump');
    submitted = false;
    isEditing = false;
    editingIndex = -1;
    deletingIndex = -1;
    partsList: Part[];
    errorMessage: string;

    private partsApiService: PartsApiService;

    constructor(_partsApiService: PartsApiService) {
        this.partsList = [];
        this.partsApiService = _partsApiService;
    }

    ngOnInit() {
        this.getParts();
    }

    onSubmit() {
        console.log('on submit: model: ' + JSON.stringify(this.model, null, 2));
        this.submitted = true;
        if (this.isEditing) {
            this.partsApiService
                .updatePart(this.model)
                .subscribe(
                part => this.partsList[this.editingIndex] = part,
                error => this.errorMessage = error
                );
            this.editingIndex = -1;
        } else {
            this.addPart(this.model);
        }
        this.model = new Part('', '', '');
    }

    editPart(part: Part) {
        console.log(this.editingIndex);
        this.editingIndex = this.partsList.indexOf(part);
        console.log(this.editingIndex);

        this.model._id = part._id;
        this.model.partId = part.partId;
        this.model.partName = part.partName;

        this.isEditing = true;
    }

    getParts() {
        this.partsApiService
            .getParts().subscribe(
            parts => this.partsList = parts,
            error => this.errorMessage = <any>error
            );
    }

    addPart(part: Part) {
        if (!part) { return; }
        console.log('part to save: ', JSON.stringify(part, null, 2))
        this.partsApiService.createPart(part)
            .subscribe(
            _part => this.partsList.push(_part),
            error => this.errorMessage = <any>error
            );
    }

    deletePart(part: Part) {
        if (!part) { return; }
        console.log('part to delete: ', JSON.stringify(part, null, 2))
        this.deletingIndex = this.partsList.indexOf(part);
        this.partsApiService.deletePart(part._id)
            .subscribe(
            _part => {
                this.partsList.splice(this.deletingIndex,1);
            },
            error => this.errorMessage = <any>error
            );
    }
}
