"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Utilisateur_1 = require("./Utilisateur");
var Rx_1 = require('rxjs/Rx');
var UtilisateurService = (function () {
    function UtilisateurService(http) {
        this.UrlWebApi = 'http://localhost:8080';
        this.isLoggedIn = false;
        this._utilisateur = new Utilisateur_1.Utilisateur();
        this.loggedIn = new Rx_1.BehaviorSubject(this.isLoggedIn);
        this.Utilisateur = new Rx_1.BehaviorSubject(this._utilisateur);
        this.http = http;
    }
    UtilisateurService.prototype.CreerNouveauUtilisateur = function (utilisateur) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post(this.UrlWebApi + '/Utilisateur/Creer', utilisateur, options).map(function (res) {
            res.json();
            console.log('res', res);
        }).subscribe(function (p) {
            console.log('Utilisateur a été enregistré');
        }, function (err) {
            console.log('Erreur de sauvegarde', err);
        });
    };
    UtilisateurService.prototype.Login = function (user, password) {
        this.isLoggedIn = false;
        if (user && password) {
            var creds = "Email=" + user + "&Password=" + password;
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            return this.http.post(this.UrlWebApi + '/Login', creds, { headers: headers }).map(function (res) { return res.json(); });
        }
    };
    UtilisateurService = __decorate([
        core_1.Injectable()
    ], UtilisateurService);
    return UtilisateurService;
}());
exports.UtilisateurService = UtilisateurService;
//# sourceMappingURL=utilisateur.service.js.map