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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var restraurant_service_1 = require("./restraurant.service");
var CreerRestaurantComponent = (function () {
    function CreerRestaurantComponent(fb, restaurantService, router) {
        this.restaurantService = restaurantService;
        this.router = router;
        this.form = fb.group({
            "Name": ["", forms_1.Validators.compose([forms_1.Validators.minLength(2), forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
            "Tel": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(50)])],
            "Email": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Adresse": ["", forms_1.Validators.required],
            "CategorieRestaurant": [""],
            "Ville": ["", forms_1.Validators.required],
            "Classification": ["", forms_1.Validators.required],
            "description": ["", forms_1.Validators.required],
        });
    }
    CreerRestaurantComponent.prototype.save = function (model, isValid) {
        if (isValid) {
            this.restaurantService.CreerNouveauRestaurant(model);
        }
    };
    CreerRestaurantComponent = __decorate([
        core_1.Component({ selector: 'restaurant', templateUrl: "../app/restaurant/CreerRestaurant.html" }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, restraurant_service_1.RestaurantService, router_1.Router])
    ], CreerRestaurantComponent);
    return CreerRestaurantComponent;
}());
exports.CreerRestaurantComponent = CreerRestaurantComponent;
//# sourceMappingURL=creer.restaurant.component.js.map