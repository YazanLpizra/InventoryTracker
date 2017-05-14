import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { InventoryRoutingModule } from './inventory-routing.module';

import { InventoryListModule } from './inventoryList/inventory-list.module';
import { CreateInventoryModule } from './createInventory/create-inventory.module';
import { DeleteInventoryModule } from './deleteInventory/delete-inventory.module';
import { EditInventoryModule } from './editInventory/edit-inventory.module';
import { InventoryDetailsModule } from './inventoryDetails/inventory-details.module';

import { InventoryComponent } from './inventory.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,

        // feature routing
        InventoryRoutingModule,

        // feature modules
        InventoryListModule,
        InventoryDetailsModule,
        CreateInventoryModule,
        EditInventoryModule,
        DeleteInventoryModule
    ],
    declarations: [InventoryComponent],
    exports: [InventoryComponent]
})
export class InventoryModule { }
