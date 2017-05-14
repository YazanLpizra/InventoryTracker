import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { InventoryModule } from './inventory/inventory.module';
import { MyCoreModule } from './core/core.module';
import { PageNotFoundModule } from './pageNotFound/page-not-found.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    // Imported modules
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,

    // Custom modules
    MyCoreModule,
    PageNotFoundModule,
    InventoryModule,

    //app-level routing
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
