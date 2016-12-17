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
var platform_browser_1 = require('@angular/platform-browser');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var accueil_component_1 = require('./accueil.component');
var besoin_aide_component_1 = require('./besoin.aide.component');
var contact_component_1 = require('./contact.component');
var detail_component_1 = require('./detail.component');
var creer_compte_component_1 = require('./creer.compte.component');
var livres_component_1 = require('./livres.component');
var adresse_component_1 = require('./adresse.component');
// import {LoginComponent} from './login.component';
var http_1 = require('@angular/http');
var livres_service_1 = require('./livres.service');
var panier_service_1 = require('./panier.service');
var forms_1 = require("@angular/forms");
var compte_service_1 = require("./compte.service");
var creer_utilisateur_component_1 = require("./utilisateur/creer.utilisateur.component");
var utilisateur_service_1 = require("./utilisateur/utilisateur.service");
var login_component_1 = require("./login/login.component");
var creer_hotel_component_1 = require("./hotel/creer.hotel.component");
var hotel_service_1 = require("./hotel/hotel.service");
var listing_hotels_component_1 = require("./hotel/listing.hotels.component");
var detail_hotel_component_1 = require("./hotel/detail.hotel.component");
var creer_restaurant_component_1 = require("./restaurant/creer.restaurant.component");
var restraurant_service_1 = require("./restaurant/restraurant.service");
var listing_restaurant_component_1 = require("./restaurant/listing.restaurant.component");
var detail_restaurant_component_1 = require("./restaurant/detail.restaurant.component");
var ng2_file_upload_1 = require('ng2-file-upload');
var gallery_component_1 = require("./gallery.component");
var common_1 = require('@angular/common');
var logged_guard_1 = require('./logged.guard');
var ng2_filter_pipe_1 = require('ng2-filter-pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, ng2_filter_pipe_1.Ng2FilterPipeModule],
            declarations: [
                app_component_1.AppComponent,
                accueil_component_1.AccueilComponent,
                besoin_aide_component_1.BesoinAideComponent,
                contact_component_1.ContactComponent,
                detail_component_1.DetailComponent,
                creer_compte_component_1.CreerCompteComponent,
                creer_utilisateur_component_1.CreerUtilisateurComponent,
                livres_component_1.LivresComponent,
                adresse_component_1.AdresseComponent,
                login_component_1.LoginComponent,
                creer_hotel_component_1.CreerHotelComponent,
                listing_hotels_component_1.ListingHotelsComponent,
                detail_hotel_component_1.DetailHotelComponent,
                creer_restaurant_component_1.CreerRestaurantComponent,
                listing_restaurant_component_1.ListingRestaurantComponent,
                detail_restaurant_component_1.DetailRestaurantComponent,
                ng2_file_upload_1.FileSelectDirective,
                gallery_component_1.GalleryComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                livres_service_1.LivresService,
                panier_service_1.PanierService,
                compte_service_1.CompteService,
                utilisateur_service_1.UtilisateurService,
                hotel_service_1.HotelService,
                restraurant_service_1.RestaurantService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                logged_guard_1.LoggedInGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map