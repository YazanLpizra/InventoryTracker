import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Part } from '../core/models/Part';
import { SharedDataService } from '../core/services/shared-data.service';
import { PartApiService } from '../core/services/partApi.service';

@Component({
    selector: 'inventory-details',
    templateUrl: 'app/inventoryDetails/inventory-details.component.html'
})
export class InventoryDetailsComponent implements OnInit {

    private part: Part;

    constructor(
        private sharedDateService: SharedDataService,
        private partApiService: PartApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        console.log('constructor of details component');
        this.sharedDateService.getPart()
            .subscribe(
            (_part: Part) => {
                this.part = _part;
                console.log('Part recieved:', JSON.stringify(_part, null, 2));
            },
            error => console.error('Error:', error)
            );
    }

    ngOnInit(): void {
    }
}