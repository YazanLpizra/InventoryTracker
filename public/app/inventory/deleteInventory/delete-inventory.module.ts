import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpModule, JsonpModule } from '@angular/http';

import { DeleteInventoryComponent } from './delete-inventory.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, RouterModule],
  declarations: [DeleteInventoryComponent],
  exports: [DeleteInventoryComponent]
})
export class DeleteInventoryModule { }
