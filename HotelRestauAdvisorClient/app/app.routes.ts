import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './accueil.component';
import {BesoinAideComponent} from './besoin.aide.component';
import {ContactComponent} from './contact.component';
import {DetailComponent} from './detail.component';
import {CreerCompteComponent} from './creer.compte.component';
import {LivresComponent} from './livres.component';
import {CreerUtilisateurComponent} from "./utilisateur/creer.utilisateur.component";
import {LoginComponent} from "./login/login.component";
import {CreerHotelComponent} from  "./hotel/creer.hotel.component";
import {ListingHotelsComponent} from "./hotel/listing.hotels.component";
import {DetailHotelComponent} from "./hotel/detail.hotel.component";
import {CreerRestaurantComponent} from "./restaurant/creer.restaurant.component";
import {ListingRestaurantComponent} from "./restaurant/listing.restaurant.component";
import {DetailRestaurantComponent} from "./restaurant/detail.restaurant.component";
import {GalleryComponent} from "./gallery.component";
import {LoggedInGuard} from "./logged.guard";

/*------------All routes----------------*/

const appRoutes:Routes = [
    {path: '', component: AccueilComponent},
    {path: 'Accueil', component: AccueilComponent},
    {path: 'BesoinAide', component: BesoinAideComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'Detail/:Id', component: DetailComponent},
    {path: 'CreerCompte', component: CreerCompteComponent},
    {path: 'CreerUtilisateur', component: CreerUtilisateurComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'LesLivres', component: LivresComponent},
    {path: 'LesLivres/:Category', component: LivresComponent},
    {path: 'CreerHotel', component: CreerHotelComponent},
    {path: 'Hotels', component: ListingHotelsComponent},
    {path: 'DetailHotels/:Id', component: DetailHotelComponent,canActivate: [LoggedInGuard]},
    {path: 'CreerRestaurant', component: CreerRestaurantComponent},
    {path: 'Restaurants', component: ListingRestaurantComponent},
    {path: 'DetailRestaurant/:Id', component: DetailRestaurantComponent,canActivate: [LoggedInGuard]},
    {path: 'Gallery', component: GalleryComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);