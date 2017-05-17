import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DataTableModule, InputTextareaModule, PanelModule, DropdownModule, DialogModule, ButtonModule, CalendarModule }
    from 'primeng/primeng';


import { InventoryDetailsComponent } from './inventory-details.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,

        //Primeng modules
        DataTableModule, InputTextareaModule, PanelModule, DropdownModule, DialogModule, ButtonModule, CalendarModule
    ],
    declarations: [InventoryDetailsComponent],
    exports: [InventoryDetailsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class InventoryDetailsModule {

}
