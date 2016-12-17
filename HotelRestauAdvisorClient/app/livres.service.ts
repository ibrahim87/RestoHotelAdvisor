import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Livre} from "./livre";

@Injectable()
export class LivresService {
    private UrlWebApi = 'http://localhost:8080';
    private http:Http;
    public Livres:Livre[];

    constructor(http:Http) {
        this.http = http;
    }

    RecupererLivres():Observable<Livre[]> {
        let livres = this.http .get((this.UrlWebApi + '/Livres'),
            {headers: this.getHeaders()}) .map(response => response.json());
        return livres;
    }

    ChercherParId(id:string):Observable<Livre> {
        return this.http .get((this.UrlWebApi + '/Livre/' + id), {headers: this.getHeaders()}) .map(response => response.json());
    }

    ChercherParCategorie(categorie:string):Observable<Livre[]> {
        return this.http .get((this.UrlWebApi + '/Livres/' + categorie), {headers: this.getHeaders()}) .map(response => response.json());
    }

    AjouterLivre(livre:Livre) {
        this.Livres.push(livre);
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}