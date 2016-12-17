import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Restaurant} from "./Restaurant";

@Injectable()
export class RestaurantService {
    
    private UrlWebApi = 'http://localhost:8080';
    private http:Http;
    isLoggedIn:boolean = false;
    _restaurant:Restaurant = new Restaurant();

    constructor(http:Http) {
        this.http = http;
    }
    /*--------- Creer nouveau Restaurant ---------*/
    CreerNouveauRestaurant(restaurant:Restaurant) {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.post(this.UrlWebApi + '/Restaurant/Creer', restaurant, options) .map((res:Response) => {
            res.json();
            console.log('res', res);
        }) .subscribe(p => {
            console.log('Resttaurant a été enregistré');
        }, err => {
            console.log('Erreur de sauvegarde', err);
        });
    }

    /*--------- Recuperer Restaurants ---------*/
    RecupererRestaurants():Observable<Restaurant[]> {
        let restaurants = this.http .get((this.UrlWebApi + '/Restaurants'),
            {headers: this.getHeaders()}) .map(response => response.json());
        return restaurants;
    }

    /*--------- detail Restaurant ---------*/
    getRestaurantById(id:string):Observable<Restaurant> {
            return this.http .get((this.UrlWebApi + '/Restaurant/' + id), {headers: this.getHeaders()}) .map(response => response.json());
        }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}