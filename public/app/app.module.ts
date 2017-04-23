import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PartFormComponent } from './parts/part-Form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,PartFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
