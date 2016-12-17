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
var hotel_service_1 = require("./hotel.service");
var Hotel_1 = require("./Hotel");
var DetailHotelComponent = (function () {
    function DetailHotelComponent(route, hotelService) {
        this.route = route;
        this.hotelService = hotelService;
        this.Id = "";
        this.hotel = new Hotel_1.Hotel();
    }
    DetailHotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Id = this.route.snapshot.params['Id'];
        this.hotelService.getHotelById(this.Id).subscribe(function (p) {
            _this.hotel = p;
        }, function (err) {
            console.log(err);
        });
    };
    DetailHotelComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            templateUrl: "../app/hotel/detailHotel.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, hotel_service_1.HotelService])
    ], DetailHotelComponent);
    return DetailHotelComponent;
}());
exports.DetailHotelComponent = DetailHotelComponent;
//# sourceMappingURL=detail.hotel.component.js.map