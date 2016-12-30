"use strict";
var router_1 = require('@angular/router');
var accueil_component_1 = require('./accueil.component');
var besoin_aide_component_1 = require('./besoin.aide.component');
var contact_component_1 = require('./contact.component');
var creer_compte_component_1 = require('./creer.compte.component');
var creer_utilisateur_component_1 = require("./utilisateur/creer.utilisateur.component");
var login_component_1 = require("./login/login.component");
var creer_hotel_component_1 = require("./hotel/creer.hotel.component");
var listing_hotels_component_1 = require("./hotel/listing.hotels.component");
var detail_hotel_component_1 = require("./hotel/detail.hotel.component");
var creer_restaurant_component_1 = require("./restaurant/creer.restaurant.component");
var listing_restaurant_component_1 = require("./restaurant/listing.restaurant.component");
var detail_restaurant_component_1 = require("./restaurant/detail.restaurant.component");
var gallery_component_1 = require("./gallery.component");
var logged_guard_1 = require("./logged.guard");
/*------------All routes----------------*/
var appRoutes = [
    { path: '', component: accueil_component_1.AccueilComponent },
    { path: 'Accueil', component: accueil_component_1.AccueilComponent },
    { path: 'BesoinAide', component: besoin_aide_component_1.BesoinAideComponent },
    { path: 'Contact', component: contact_component_1.ContactComponent },
    { path: 'CreerCompte', component: creer_compte_component_1.CreerCompteComponent },
    { path: 'CreerUtilisateur', component: creer_utilisateur_component_1.CreerUtilisateurComponent },
    { path: 'Login/CreerUtilisateur', component: creer_utilisateur_component_1.CreerUtilisateurComponent },
    { path: 'Login', component: login_component_1.LoginComponent },
    { path: 'CreerHotel', component: creer_hotel_component_1.CreerHotelComponent },
    { path: 'Hotels', component: listing_hotels_component_1.ListingHotelsComponent },
    { path: 'DetailHotels/:Id', component: detail_hotel_component_1.DetailHotelComponent, canActivate: [logged_guard_1.LoggedInGuard] },
    { path: 'CreerRestaurant', component: creer_restaurant_component_1.CreerRestaurantComponent },
    { path: 'Restaurants', component: listing_restaurant_component_1.ListingRestaurantComponent },
    { path: 'DetailRestaurant/:Id', component: detail_restaurant_component_1.DetailRestaurantComponent, canActivate: [logged_guard_1.LoggedInGuard] },
    { path: 'Gallery', component: gallery_component_1.GalleryComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map