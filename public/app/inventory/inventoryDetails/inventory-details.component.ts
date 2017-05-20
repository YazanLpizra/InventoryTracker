import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataTable, Column } from 'primeng/primeng';

import { ShippingStatuses, StockStatuses } from '../../core/models/Statuses'
import { Part } from '../../core/models/Part';
import { Unit } from '../../core/models/Unit';
import { SharedDataService } from '../../core/services/shared-data.service';
import { PartApiService } from '../../core/services/partApi.service';

@Component({
    selector: 'inventory-details',
    templateUrl: 'app/inventory/inventoryDetails/inventory-details.component.html'
})
export class InventoryDetailsComponent {

    part: Part;
    stacked: boolean;

    stockStatuses: { label: string, value: string }[];
    stockStatusesFilterOptions: { label: string, value: string }[];
    shippingStatuses: { label: string, value: string }[];
    shippingStatusesFilterOptions: { label: string, value: string }[];

    displayDialog: boolean;

    unit: Unit = new Unit();
    selectedUnit: Unit;
    newUnit: boolean;

    stockedDate: Date;
    soldDate: Date;

    constructor(
        private sharedDateService: SharedDataService,
        private partApiService: PartApiService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        console.log('constructor of details component');

        this.stacked = false;
        this.stockStatusesFilterOptions = StockStatuses;
        this.stockStatuses = StockStatuses.slice(1, StockStatuses.length - 1);
        this.shippingStatusesFilterOptions = ShippingStatuses;
        this.shippingStatuses = ShippingStatuses.slice(1, StockStatuses.length - 1);

        this.sharedDateService.getPart()
            .subscribe(
            (_part: Part) => {
                if (_part) {
                    this.part = _part;
                    console.log('Part recieved from sharedData:', JSON.stringify(_part, null, 2));
                } else {
                    this.route.params.subscribe(params => {
                        let partNumber = params['partNumber'];
                        console.log('part number as rest param:', partNumber);
                        this.partApiService.getPart(partNumber).subscribe(
                            this.handleIncomingPart,
                            error => {
                                console.error('Error retrieving part from database:', error);
                            }
                        );
                    });

                }
            },
            error => console.error('Error:', error)
            );
    }

    toggleStacked() {
        this.stacked = !this.stacked;
    }

    showDialogToAdd() {
        this.newUnit = true;
        this.unit = new Unit();

        this.stockedDate = new Date(this.unit.stockedDate);

        this.displayDialog = true;
    }

    save() {
        let units = [...this.part.units];

        this.unit.stockedDate = this.stockedDate;
        this.unit.soldDate = this.soldDate;

        if (this.newUnit) {
            console.log('creating new unit');
            units.push(this.unit);
        } else {
            console.log('updating existing  unit');
            let i = this.findSelectedUnitIndex();
            if (i !== -1) {
                units[i] = this.unit;
                console.log('post this.part.units[this.findSelectedUnitIndex()].stockedDate:',
                    this.part.units[i].stockedDate);
            } else {
                console.log('Could not find part to update')
            }
        }

        this.part.units = units;

        this.partApiService.updatePart(this.part).subscribe(
            this.handleIncomingPart,
            error => {
                console.error('Error updating part:', error);
            }
        );

        this.soldDate = null;
        this.stockedDate = null;
        this.unit = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.findSelectedUnitIndex();
        this.part.units = this.part.units.filter((val, i) => i !== index);
        this.unit = null;
        this.displayDialog = false;
        this.partApiService.updatePart(this.part).subscribe(
            this.handleIncomingPart,
            error => {
                console.error('Error deleting part:', error);
            }
        )
    }

    onRowSelect(event: any) {
        this.newUnit = false;
        this.unit = this.cloneUnit(event.data);

        this.stockedDate = (this.unit.stockedDate && this.unit.stockedDate != null) ? new Date(this.unit.stockedDate) : null;
        this.soldDate = (this.unit.soldDate && this.unit.soldDate != null) ? new Date(this.unit.soldDate) : null;

        this.displayDialog = true;
    }

    reroute(newRoute: string[], part: Part) {
        if (part) {
            console.log('InventoryListComponent: setting part');
            this.sharedDateService.setPart(part);
        }

        // this.router.navigateByUrl('/inventory/create');
        this.router.navigate(newRoute, { relativeTo: this.route.parent });
    }

    private cloneUnit(u: Unit): Unit {
        let unit = new Unit();
        for (let prop in u) {
            unit[prop] = u[prop];
        }
        return unit;
    }

    private findSelectedUnitIndex(): number {
        // return this.part.units.indexOf(this.selectedUnit);
        let num = this.part.units.map((unit: Unit, i: number, array: Unit[]) => {
            if (this.unit.unitId == unit.unitId) return i;
        })[0];
        return num != null && num !== undefined ? num : -1;
    }

    private handleIncomingPart(apiPart: Part): void {
        if (apiPart) {
            this.part = apiPart;
            console.log('Part recieved from db:', JSON.stringify(apiPart, null, 2));
        } else {
            console.error('Error: Cannot retrieve part');
        }
    }
}