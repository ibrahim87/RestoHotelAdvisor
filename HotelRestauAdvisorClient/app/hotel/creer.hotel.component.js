"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var ng2_file_upload_1 = require('ng2-file-upload');
var CreerHotelComponent = (function () {
    function CreerHotelComponent(fb, hotelService, router) {
        this.hotelService = hotelService;
        this.router = router;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:8080/upload' });
        this.form = fb.group({
            "Name": ["", forms_1.Validators.compose([forms_1.Validators.minLength(2), forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
            "Tel": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^(0|[1-9][0-9]*)$")])],
            "Email": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Adresse": ["", forms_1.Validators.required],
            "CategorieHotel": ["", forms_1.Validators.required],
            "Ville": ["", forms_1.Validators.required],
            "Classification": ["", forms_1.Validators.required],
            "description": ["", forms_1.Validators.required],
            "Tarif": ["", forms_1.Validators.required]
        });
    }
    CreerHotelComponent.prototype.save = function (model, isValid) {
        if (isValid) {
            this.hotelService.CreerNouveauHotel(model);
        }
    };
    CreerHotelComponent = __decorate([
        core_1.Component({ selector: 'hotel', templateUrl: "../app/hotel/CreerHotel.html" })
    ], CreerHotelComponent);
    return CreerHotelComponent;
}());
exports.CreerHotelComponent = CreerHotelComponent;
//# sourceMappingURL=creer.hotel.component.js.map