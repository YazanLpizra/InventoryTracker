import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';

import { PartsApiService } from './partsApi.service';
import { PartFormComponent } from './part-Form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
  declarations: [PartFormComponent],
  providers: [PartsApiService],
  exports: [PartFormComponent]
})
export class PartsModule { }
