"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var inventory_list_module_1 = require("./inventoryList/inventory-list.module");
var inventory_details_module_1 = require("./inventoryDetails/inventory-details.module");
var core_module_1 = require("./core/core.module");
var page_not_found_module_1 = require("./pageNotFound/page-not-found.module");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            // Imported modules
            animations_1.BrowserAnimationsModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(app_routes_1.appRoutes),
            forms_1.FormsModule,
            // Custom modules
            inventory_details_module_1.InventoryDetailsModule,
            core_module_1.MyCoreModule,
            inventory_list_module_1.InventoryListModule,
            page_not_found_module_1.PageNotFoundModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map