import { NgModule } from '@angular/core';
import { } from '@angular/';
import { BrowserModule } from '@angular/platform-browser';

import { PartApiService } from './services/partApi.service';
import { SharedDataService } from './services/shared-data.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [],
  providers: [PartApiService, SharedDataService],
})
export class MyCoreModule { }
