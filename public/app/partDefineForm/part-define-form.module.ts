import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PartDefineFormComponent } from './part-define-form.component';
import { FieldsFormComponent } from './fieldsForm/fields-form.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [PartDefineFormComponent, FieldsFormComponent]
})
export class PartDefineFormModule {

}