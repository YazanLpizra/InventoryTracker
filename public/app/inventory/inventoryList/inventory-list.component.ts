'use strict';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Part } from '../../core/models/Part';
import { PartApiService } from '../../core/services/partApi.service';
import { SharedDataService } from '../../core/services/shared-data.service';

@Component({
    selector: 'part-form',
    templateUrl: 'app/inventory/inventoryList/inventory-list.component.html'
})
export class InventoryListComponent implements OnInit {

    editingIndex = 4;
    deletingIndex = -1;
    partsList: Part[];
    errorMessage: string;

    constructor(
        private partsApiService: PartApiService,
        private sharedDataService: SharedDataService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.partsList = [];
        // this.sharedDataService.getPart().subscribe(
        //     _part => {
        //         if (_part) {
        //             console.log('InventoryListComponent: getting single part');
        //             this.partsList.push(_part);
        //         }
        //     }
        // );
    }

    ngOnInit() {
        this.getParts();
    }

    // editPart(part: Part) {
    //     console.log(this.editingIndex);
    //     this.editingIndex = this.partsList.indexOf(part);
    //     console.log(this.editingIndex);

    //     this.model.partName = part.partName;
    //     this.model.partNumber = part.partNumber;
    //     this.model.description = part.description;

    //     this.isEditing = true;
    // }

    getParts() {
        this.partsApiService
            .getParts().subscribe(
            _parts => {
                if (_parts) {
                    console.log('InventoryListComponent: getting all parts from API');
                    this.appendParts(_parts);
                }
            },
            error => this.errorMessage = <any>error
            );
    }

    // deletePart(part: Part) {
    //     if (!part) { return; }
    //     console.log('part to delete: ', JSON.stringify(part, null, 2))
    //     this.deletingIndex = this.partsList.indexOf(part);
    //     this.partsApiService.deletePart(part.partNumber)
    //         .subscribe(
    //         _part => {
    //             this.partsList.splice(this.deletingIndex, 1);
    //         },
    //         error => this.errorMessage = <any>error
    //         );
    // }

    reroute(newRoute: string[], part: Part) {
        if (part) {
            console.log('InventoryListComponent: setting part');
            this.sharedDataService.setPart(part);
        }

        // this.router.navigateByUrl('/inventory/create');
        this.router.navigate(newRoute, { relativeTo: this.route.parent });
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
