"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Hotel_1 = require("./Hotel");
var DetailHotelComponent = (function () {
    function DetailHotelComponent(fb, router, route, hotelService, loginService) {
        this.router = router;
        this.route = route;
        this.hotelService = hotelService;
        this.loginService = loginService;
        this.Id = "";
        this.hotel = new Hotel_1.Hotel();
        this.formReservation = fb.group({
            "IdUtilisateur": loginService._utilisateur.Email,
            "IdHotel": this.route.snapshot.params['Id'],
            "NbrePersonne": [""],
            "NbreChambre": [""],
            "DateArrive": [""],
            "DateDepart": [""],
            "TotalTarif": [""],
            "DateCreation": [new Date().toISOString()]
        });
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
    DetailHotelComponent.prototype.save = function (Rmodel, isValid) {
        if (isValid) {
            this.hotelService.CreerNouveauReservationHotel(Rmodel);
        }
    };
    DetailHotelComponent.prototype.CalculerPrixTotal = function (prix) {
        var numbre = 0;
        numbre = numbre + (+this.str * +prix);
        return numbre;
    };
    DetailHotelComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            templateUrl: "../app/hotel/detailHotel.html"
        })
    ], DetailHotelComponent);
    return DetailHotelComponent;
}());
exports.DetailHotelComponent = DetailHotelComponent;
//# sourceMappingURL=detail.hotel.component.js.map