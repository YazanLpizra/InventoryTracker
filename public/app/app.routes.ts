import { Routes } from '@angular/router';

import { InventoryListComponent } from './inventoryList/inventory-list.component';
import { InventoryDetailsComponent } from './inventoryDetails/inventory-details.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'inventory',
        pathMatch: 'full'
    }, {
        path: 'inventory',
        component: InventoryListComponent,
        data: { title: 'Inventory List' }
    },
    {
        path: 'inventory/:partNumber/details',
        component: InventoryDetailsComponent,
        data: { title: 'Inventory Details' }
    },
    // { path: '**', component: PageNotFoundComponent }
];

//errors with details page. maybe fixed if data is present. commit and push when working nicely