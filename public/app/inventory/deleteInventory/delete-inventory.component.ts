import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Part } from '../../core/models/Part';
import { SharedDataService } from '../../core/services/shared-data.service';
import { PartApiService } from '../../core/services/partApi.service';

@Component({
    selector: 'delete-inventory',
    templateUrl: 'app/inventory/deleteInventory/delete-inventory.component.html'
})
export class DeleteInventoryComponent {

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

    delete() {
        this.partApiService.deletePart(this.part.partNumber).subscribe(
            _part => {
                if (_part) {
                    console.log('part deleted successfully');
                } else {
                    console.log('part not deleted successfully');
                }
                this.backToList();
            },
            error => {
                console.error('Error encountered when deleting part: ' + error);
                this.backToList();

            }
        );
    }

    backToList() {
        this.router.navigate(['list'], { relativeTo: this.route.parent });
    }
}