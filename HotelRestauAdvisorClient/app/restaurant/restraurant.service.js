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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Restaurant_1 = require("./Restaurant");
var RestaurantService = (function () {
    function RestaurantService(http) {
        this.UrlWebApi = 'http://localhost:8080';
        this.isLoggedIn = false;
        this._restaurant = new Restaurant_1.Restaurant();
        this.http = http;
    }
    /*--------- Creer nouveau Restaurant ---------*/
    RestaurantService.prototype.CreerNouveauRestaurant = function (restaurant) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post(this.UrlWebApi + '/Restaurant/Creer', restaurant, options).map(function (res) {
            res.json();
            console.log('res', res);
        }).subscribe(function (p) {
            console.log('Resttaurant a été enregistré');
        }, function (err) {
            console.log('Erreur de sauvegarde', err);
        });
    };
    /*--------- Recuperer Restaurants ---------*/
    RestaurantService.prototype.RecupererRestaurants = function () {
        var restaurants = this.http.get((this.UrlWebApi + '/Restaurants'), { headers: this.getHeaders() }).map(function (response) { return response.json(); });
        return restaurants;
    };
    /*--------- detail Restaurant ---------*/
    RestaurantService.prototype.getRestaurantById = function (id) {
        return this.http.get((this.UrlWebApi + '/Restaurant/' + id), { headers: this.getHeaders() }).map(function (response) { return response.json(); });
    };
    RestaurantService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    RestaurantService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestaurantService);
    return RestaurantService;
}());
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=restraurant.service.js.map