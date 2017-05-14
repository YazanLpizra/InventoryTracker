import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventoryList/inventory-list.component';
import { InventoryDetailsComponent } from './inventoryDetails/inventory-details.component';
import { CreateInventoryComponent } from './createInventory/create-inventory.component';

const inventoryRoutes: Routes = [
    {
        path: 'inventory',
        redirectTo: 'inventory/list',
        pathMatch: 'full'
    },
    {
        path: 'inventory',
        component: InventoryComponent,
        children: [
            {
                path: 'list',
                component: InventoryListComponent,
                data: { title: 'Inventory Items List' }
            },
            {
                path: ':partNumber/details',
                component: InventoryDetailsComponent,
                data: { title: 'Inventory Item Details' }
            },
            {
                path: 'create',
                component: CreateInventoryComponent,
                data: { title: 'Create New Inventory Item' }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(inventoryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InventoryRoutingModule { }