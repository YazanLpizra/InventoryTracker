'use strict';

import { Component, OnInit } from '@angular/core';

import { Part } from './part';
import { PartsApiService } from './partsApi.service';

@Component({
    selector: 'part-form',
    templateUrl: 'app/parts/part-form.component.html'
})
export class PartFormComponent implements OnInit {

    model = new Part('ajsdhjlam561', '0001', 'fuel pump');
    submitted = false;
    isEditing = false;
    editingIndex = -1;
    partsList: Part[];
    errorMessage: string;

    private partsApiService: PartsApiService;

    constructor(_partsApiService: PartsApiService) {
        this.partsList = [];
        this.partsApiService = _partsApiService;
    }

    ngOnInit() {
        // this.getParts();
    }

    onSubmit() {
        console.log('on submit');
        this.submitted = true;
        if (this.isEditing) {
            this.partsList[this.editingIndex] = this.model;
            this.editingIndex = -1;
        } else {
            this.partsList.push(this.model);
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
        // this.partsApiService
        //     .getParts().subscribe(
        //     parts => this.partsList = parts,
        //     error => this.errorMessage = <any>error
        //     );
    }

    addHero(part: Part) {
    //     if (!part) { return; }
    //     this.partsApiService.createPart(part)
    //     .subscribe(
    //         _part => this.partsList.push(_part),
    //         error => this.errorMessage = <any>error
    //  );

    }
}
