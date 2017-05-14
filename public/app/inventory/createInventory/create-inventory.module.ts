import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CreateInventoryComponent } from './create-inventory.component'

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule],
    declarations: [CreateInventoryComponent],
    exports: [CreateInventoryComponent]
})
export class CreateInventoryModule {

}
