import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { InventoryDetailsComponent } from './inventory-details.component'

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, RouterModule],
    declarations: [InventoryDetailsComponent],
    exports: [InventoryDetailsComponent]
})
export class InventoryDetailsModule {

}
