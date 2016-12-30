import {Component} from '@angular/core';
import {UtilisateurService} from "./utilisateur/utilisateur.service";
import {Utilisateur} from "./utilisateur/Utilisateur";

@Component({
    selector: 'je-bouquine',
    templateUrl: "../app/html/index.html",
    styleUrls: ["../Content/style.css","../Content/assets/css/slick.css"]})

export class AppComponent {

    utilisateur:Utilisateur;
    LoggedIn:boolean =false;

    constructor(private utilisateurService:UtilisateurService) {

        this.utilisateurService.Utilisateur.subscribe(p=> this.utilisateur = p);
        this.utilisateurService.loggedIn.subscribe(p=> this.LoggedIn = p);
    }

}
