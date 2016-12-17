import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
@Component({
    selector: 'login',
    templateUrl: "../app/login/Login.html",
    styleUrls: ["../../../Content/login.css"],
    styles: [` input.ng-dirty.ng-invalid { border: solid red 1px; !important;}
            input.ng-dirty.ng-valid { border: solid green 2px; !important;} `]
})
export class LoginComponent {
    IsLogged:boolean = false;
    constructor(private utilisateurService:UtilisateurService, private router:Router) {
    }

    onSubmit(form:NgForm) {
        console.log('should register:', form.value);
        this.utilisateurService.Login(form.value.user, form.value.password).subscribe(data => {
            console.log('data', data);
            if (data != null) {
                this.utilisateurService.isLoggedIn = true;
                this.utilisateurService.loggedIn.next(this.utilisateurService.isLoggedIn);
                this.utilisateurService._utilisateur = data;
                this.utilisateurService.Utilisateur.next(this.utilisateurService._utilisateur);
                this.router.navigate(['DetailHotels/:Id']);
            } else {
                this.IsLogged = false;
            }
        }, err => console.log(err), () => console.log('Authentication Complete'));
    }
}