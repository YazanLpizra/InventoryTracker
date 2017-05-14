import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Part } from '../../core/models/Part';
import { SharedDataService } from '../../core/services/shared-data.service';
import { PartApiService } from '../../core/services/partApi.service';

@Component({
    selector: 'edit-inventory',
    templateUrl: 'app/inventory/editInventory/edit-inventory.component.html'
})
export class EditInventoryComponent {
    private model: Part = new Part();

    constructor(
        private formBuilder: FormBuilder,
        private sharedDataService: SharedDataService,
        private partApiService: PartApiService
    ) {
        this.sharedDataService.getPart().subscribe(
            _part => {
                if (_part) {
                    this.model = _part;
                }
            }
        )
    }

    onSubmit() {
        console.log('on edit submit: model: ' + JSON.stringify(this.model, null, 2));
        this.partApiService
            .updatePart(this.model)
            .subscribe(
            part => {
                console.log('EditInventoryComponent: setting part');
                this.sharedDataService.setPart(part);
            }
            // error => this.errorMessage = error,
            // () => this.editingIndex = -1
            );

        this.model = new Part();
    }
}
