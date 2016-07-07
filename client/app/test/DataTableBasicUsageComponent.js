"use strict";
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
var ng2_material_1 = require('ng2-material');
var DataTableBasicUsageComponent = (function () {
    function DataTableBasicUsageComponent() {
        this.materials = [
            { 'id': 1, 'name': 'Acrylic (Transparent)', 'quantity': '25', 'price': '$2.90' },
            { 'id': 2, 'name': 'Plywood (Birch)', 'quantity': '50', 'price': '$1.25' },
            { 'id': 3, 'name': 'Laminate (Gold on Blue)', 'quantity': '10', 'price': '$2.35' }
        ];
    }
    DataTableBasicUsageComponent.prototype.onClick = function (material) {
        console.log(material);
    };
    DataTableBasicUsageComponent = __decorate([
        core_1.Component({
            selector: 'data-table-basic-usage',
            templateUrl: 'app/test/data-table-basic-usage.html',
            directives: [ng2_material_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableBasicUsageComponent);
    return DataTableBasicUsageComponent;
}());
exports.DataTableBasicUsageComponent = DataTableBasicUsageComponent;
//# sourceMappingURL=DataTableBasicUsageComponent.js.map