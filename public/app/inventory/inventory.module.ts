import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { InventoryRoutingModule } from './inventory-routing.module';

import { InventoryListModule } from './inventoryList/inventory-list.module';
import { CreateInventoryModule } from './createInventory/create-inventory.module';
import { InventoryDetailsModule } from './inventoryDetails/inventory-details.module';

import { InventoryComponent } from './inventory.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,

        InventoryRoutingModule,
        InventoryListModule,
        InventoryDetailsModule,
        CreateInventoryModule
    ],
    declarations: [InventoryComponent],
    exports: [InventoryComponent]
})
export class InventoryModule { }
