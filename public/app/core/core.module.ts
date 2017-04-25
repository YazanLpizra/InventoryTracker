import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DefaultRequestOptions} from './default-request-options.service'

@NgModule({
  imports: [BrowserModule],
  declarations: [],
  providers: [DefaultRequestOptions],
  exports: []
})
export class CoreModule { }
