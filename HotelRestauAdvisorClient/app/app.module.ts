import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app.routes';
import {AppComponent} from './app.component';
import {AccueilComponent} from './accueil.component';
import {BesoinAideComponent} from './besoin.aide.component';
import {ContactComponent} from './contact.component';
import {DetailComponent} from './detail.component';
import {CreerCompteComponent} from './creer.compte.component';
import {LivresComponent} from './livres.component';
import {AdresseComponent} from './adresse.component';
// import {LoginComponent} from './login.component';

import { HttpModule } from '@angular/http';
import { LivresService } from './livres.service';
import { PanierService } from './panier.service';
import {FormsModule, ReactiveFormsModule}from "@angular/forms";
import {CompteService} from "./compte.service";
import {CreerUtilisateurComponent} from "./utilisateur/creer.utilisateur.component";
import {UtilisateurService} from "./utilisateur/utilisateur.service";
import {LoginComponent} from "./login/login.component";
import {CreerHotelComponent} from "./hotel/creer.hotel.component";
import {HotelService} from "./hotel/hotel.service";
import {ListingHotelsComponent} from "./hotel/listing.hotels.component";
import {DetailHotelComponent} from "./hotel/detail.hotel.component";
import {CreerRestaurantComponent} from "./restaurant/creer.restaurant.component";
import {RestaurantService} from "./restaurant/restraurant.service";
import {ListingRestaurantComponent} from "./restaurant/listing.restaurant.component";
import {DetailRestaurantComponent} from "./restaurant/detail.restaurant.component";
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import {GalleryComponent} from "./gallery.component";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoggedInGuard } from './logged.guard';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
    imports: [BrowserModule, routing ,HttpModule ,ReactiveFormsModule,FormsModule,Ng2FilterPipeModule],
    declarations: [
        AppComponent,
         AccueilComponent,
         BesoinAideComponent,
        ContactComponent,
         DetailComponent,
         CreerCompteComponent,
        CreerUtilisateurComponent,
        LivresComponent,
         AdresseComponent,
        LoginComponent,
        CreerHotelComponent,
        ListingHotelsComponent,
        DetailHotelComponent,
        CreerRestaurantComponent,
        ListingRestaurantComponent,
        DetailRestaurantComponent,
        FileSelectDirective,
        GalleryComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        LivresService,
         PanierService,
        CompteService,
        UtilisateurService,
        HotelService,
        RestaurantService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        LoggedInGuard
    ]
})
export class AppModule {
}