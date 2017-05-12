import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpModule, JsonpModule } from '@angular/http';

import { InventoryListComponent } from './inventory-list.component';
import { PartApiService } from '../core/services/partApi.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, RouterModule],
  declarations: [InventoryListComponent],
  exports: [InventoryListComponent]
})
export class InventoryListModule { }
