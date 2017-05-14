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
var inventory_module_1 = require("./inventory/inventory.module");
var core_module_1 = require("./core/core.module");
var page_not_found_module_1 = require("./pageNotFound/page-not-found.module");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
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
            forms_1.FormsModule,
            // Custom modules
            core_module_1.MyCoreModule,
            page_not_found_module_1.PageNotFoundModule,
            inventory_module_1.InventoryModule,
            //app-level routing
            app_routing_module_1.AppRoutingModule
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