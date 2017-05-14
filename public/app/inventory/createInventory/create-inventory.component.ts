import { Component } from '@angular/core';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Part } from '../../core/models/Part';
import { SharedDataService } from '../../core/services/shared-data.service';
import { PartApiService } from '../../core/services/partApi.service';

@Component({
    selector: 'create-inventory',
    templateUrl: 'app/inventory/createInventory/create-inventory.component.html'
})
export class CreateInventoryComponent {
    private model: Part;

    constructor(
        // private formBuilder: FormBuilder,
        private sharedDataService: SharedDataService,
        private partApiService: PartApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.model = new Part();
    }

    onSubmit() {
        console.log('on create submit: model: ' + JSON.stringify(this.model, null, 2));
        this.partApiService
            .createPart(this.model)
            .subscribe(
            part => {
                console.log('CreateInventoryComponent: setting part');
                this.sharedDataService.setPart(part);
            }
            // error => this.errorMessage = error,
            // () => this.editingIndex = -1
            );

        this.model = new Part();
        this.backToList();
    }

    backToList() {
        this.router.navigate(['list'], { relativeTo: this.route.parent });
    }
}
