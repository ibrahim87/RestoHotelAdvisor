import {Component} from '@angular/core';
import { PanierService } from './panier.service';
import {Livre} from './livre';
import {CompteService} from './compte.service';
import {Compte} from "./compte";

@Component({
    selector: 'je-bouquine',
    templateUrl: "../app/html/index.html",
    styleUrls: ["../Content/style.css","../Content/assets/css/slick.css"]})

export class AppComponent {
    public PanierLivre:Livre[] = [];

    compte:Compte;
    LoggedIn:boolean =false;

    constructor(private panierService:PanierService , private compteService:CompteService) {
        this.PanierLivre = this.panierService.Livres;
        this.compteService.Compte.subscribe(p=> this.compte = p);
        this.compteService.loggedIn.subscribe(p=> this.LoggedIn = p);
    }

    CalculerNombreTotalLivre():number {
        let numbre:number = 0;
        for (let item of this.PanierLivre) {
            numbre = numbre + +item.Quantite;
        }
        return numbre;
    }

    CalculerMontantTotal():number {
        let numbre:number = 0;
        for (let item of this.PanierLivre) {
            numbre = numbre + (+item.Quantite * +item.Prix);
        }
        return numbre;
    }

    SupprimerLivre(livre:Livre) {
        this.panierService.SupprimerLivre(livre);
    }
}
