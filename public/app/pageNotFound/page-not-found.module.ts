import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {PageNotFoundComponent} from './page-not-found.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
