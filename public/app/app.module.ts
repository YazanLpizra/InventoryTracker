import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PartsModule } from './parts/parts.module';
import { CoreModule } from './core/core.module';
import { PartDefineFormModule } from './partDefineForm/part-define-form.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PartsModule, CoreModule, /*PartDefineFormModule*/],
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
