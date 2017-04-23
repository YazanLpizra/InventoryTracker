'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var part_1 = require('./part');
var PartFormComponent = (function () {
    function PartFormComponent() {
        this.model = new part_1.Part("ajsdhjlam561", "0001", "fuel pump");
        this.submitted = false;
    }
    PartFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Object.defineProperty(PartFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    PartFormComponent = __decorate([
        core_1.Component({
            selector: 'part-form',
            templateUrl: 'part-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PartFormComponent);
    return PartFormComponent;
}());
exports.PartFormComponent = PartFormComponent;
//# sourceMappingURL=part-Form.component.js.map