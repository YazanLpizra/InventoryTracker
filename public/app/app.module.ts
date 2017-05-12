import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InventoryListModule } from './inventoryList/inventory-list.module';
import { InventoryDetailsModule } from './inventoryDetails/inventory-details.module';
import { MyCoreModule } from './core/core.module';
import { PageNotFoundModule } from './pageNotFound/page-not-found.module';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    // Imported modules
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

    // Custom modules
    InventoryDetailsModule,
    MyCoreModule,
    InventoryListModule,
    PageNotFoundModule
  ],
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
