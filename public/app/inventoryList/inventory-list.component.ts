'use strict';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Part } from '../core/models/Part';
import { PartApiService } from '../core/services/partApi.service';
import { SharedDataService } from '../core/services/shared-data.service';

@Component({
    selector: 'part-form',
    templateUrl: 'app/inventoryList/inventory-list.component.html'
})
export class InventoryListComponent implements OnInit {

    model = new Part('', '0001', 'fuel pump');
    submitted = false;
    isEditing = false;
    editingIndex = 4;
    deletingIndex = -1;
    partsList: Part[];
    errorMessage: string;

    constructor(
        private partsApiService: PartApiService,
        private sharedDataService: SharedDataService,
        private route: ActivatedRoute,
        private router: Router) {
        this.partsList = [];
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
                part => {
                    console.log("recieved updated part: " + part);
                    this.partsList[this.editingIndex] = part;
                },
                error => this.errorMessage = error,
                () => this.editingIndex = -1
                );
        } else {
            this.addPart(this.model);
        }
        this.model = new Part('', '', '');
    }

    editPart(part: Part) {
        console.log(this.editingIndex);
        this.editingIndex = this.partsList.indexOf(part);
        console.log(this.editingIndex);

        this.model.partName = part.partName;
        this.model.partNumber = part.partNumber;
        this.model.description = part.description;

        this.isEditing = true;
    }

    getParts() {
        this.partsApiService
            .getParts().subscribe(
            _parts => this.appendParts(_parts),
            error => this.errorMessage = <any>error
            );
    }

    addPart(part: Part) {
        if (!part) { return; }
        console.log('part to save: ', JSON.stringify(part, null, 2))
        this.partsApiService.createPart(part)
            .subscribe(
            _part => this.appendParts(_part),
            error => this.errorMessage = <any>error,
        );
    }

    deletePart(part: Part) {
        if (!part) { return; }
        console.log('part to delete: ', JSON.stringify(part, null, 2))
        this.deletingIndex = this.partsList.indexOf(part);
        this.partsApiService.deletePart(part.partNumber)
            .subscribe(
            _part => {
                this.partsList.splice(this.deletingIndex, 1);
            },
            error => this.errorMessage = <any>error
            );
    }

    reroute(newRoute: string[], part: Part) {
        this.sharedDataService.setPart(part);
        this.router.navigate(newRoute);
    }

    private appendParts(_part: any) {
        if (_part instanceof Array) {
            for (let i = 0; i < _part.length; i++) {
                this.partsList.push(_part[i]);
            }
        } else {
            this.partsList.push(_part);
        }
    }
}
