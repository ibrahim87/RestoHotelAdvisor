import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LivresService} from './livres.service';
import {PanierService} from './panier.service';
import {Livre} from "./livre";


@Component({
    selector: 'detail',
    templateUrl: "../app/html/Detail.html"
})
export class DetailComponent implements OnInit {
    public Id:string = "";
    public Livre:Livre = new Livre();

    constructor(private route:ActivatedRoute, private livresService:LivresService, private panierService:PanierService) {
    }


    ngOnInit() {
        this.Id = this.route.snapshot.params['Id'];
        this.livresService.ChercherParId(this.Id) .subscribe(p => {
            this.Livre = p;
        }, err => {
            console.log(err);
        });
    }


    AjouterLivrePanier(item:Livre) {
        this.panierService.AjouterLivre(item);
    }
}