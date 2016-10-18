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
var router_1 = require('@angular/router');
var service_food_1 = require('./service.food');
var FoodDetailComponent = (function () {
    function FoodDetailComponent(route, foodService) {
        this.route = route;
        this.foodService = foodService;
    }
    FoodDetailComponent.prototype.getSelectedFood = function () {
        var _this = this;
        this.foodService.getFoodById(this._foodId).then(function (food) { return _this.selectedFood = food; });
    };
    FoodDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this._foodId = params['id'];
            _this.getSelectedFood();
        });
    };
    FoodDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './detail.html',
            styles: ['table { width: 40%; margin: 2% 0 0 -23%; } td { text-align: right; }'],
            providers: [service_food_1.FoodService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, service_food_1.FoodService])
    ], FoodDetailComponent);
    return FoodDetailComponent;
}());
exports.FoodDetailComponent = FoodDetailComponent;
//# sourceMappingURL=app.detail.js.map