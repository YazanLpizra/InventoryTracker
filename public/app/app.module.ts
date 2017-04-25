import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PartsModule } from './parts/parts.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
// import { PartFormComponent } from './parts/part-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PartsModule, CoreModule],
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
