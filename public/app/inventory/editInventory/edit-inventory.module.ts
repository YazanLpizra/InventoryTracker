import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EditInventoryComponent } from './edit-inventory.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule],
    declarations: [EditInventoryComponent],
    exports: [EditInventoryComponent]
})
export class EditInventoryModule {

}
