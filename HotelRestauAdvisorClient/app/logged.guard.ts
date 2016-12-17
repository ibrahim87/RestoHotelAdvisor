import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UtilisateurService} from './utilisateur/utilisateur.service';
@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router:Router, private utilisateurService:UtilisateurService) {
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        if (!this.utilisateurService.isLoggedIn) {
            this.router.navigate(['Login']);
            return false;
        }
        return true;
    }
}