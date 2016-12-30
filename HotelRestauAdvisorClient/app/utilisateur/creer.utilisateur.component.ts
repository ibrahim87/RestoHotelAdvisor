import {Component} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UtilisateurService} from "./utilisateur.service";
import {Utilisateur} from "./Utilisateur";
@Component({selector: 'contact', templateUrl: "../app/utilisateur/CreerUtilisateur.html"})

export class CreerUtilisateurComponent {

    form:FormGroup;

    constructor(fb:FormBuilder, private utilisateurService:UtilisateurService, private router:Router) {
        this.form = fb.group({
            "Nom": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
            "Prenom": ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
            "Email": ["", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Password": ["", Validators.required],
            "Role":["client"],
        });
    }

    save(model:Utilisateur, isValid:boolean) {
        if (isValid) {
            this.utilisateurService.CreerNouveauUtilisateur(model);
            this.router.navigate(['/Login']);
        }
    }

}
