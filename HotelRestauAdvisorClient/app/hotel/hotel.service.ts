import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Hotel} from "./Hotel";

@Injectable()
export class HotelService {
    
    private UrlWebApi = 'http://localhost:8080';
    private http:Http;
    isLoggedIn:boolean = false;
    _hotel:Hotel = new Hotel();

    constructor(http:Http) {
        this.http = http;
    }
    /*--------- Creer nouveau Hotel ---------*/
    CreerNouveauHotel(hotel:Hotel) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.post(this.UrlWebApi + '/Hotel/Creer', hotel, options) .map((res:Response) => {
            res.json();
            console.log('res', res);
        }) .subscribe(p => {
            console.log('Hotel a été enregistré');
        }, err => {
            console.log('Erreur de sauvegarde', err);
        });
    }

    /*--------- Recuperer Hotels ---------*/
    RecupererHotels():Observable<Hotel[]> {
        let hotels = this.http .get((this.UrlWebApi + '/Hotels'),
            {headers: this.getHeaders()}) .map(response => response.json());
        return hotels;
    }

    /*--------- detail Hotel ---------*/
    getHotelById(id:string):Observable<Hotel> {
            return this.http .get((this.UrlWebApi + '/Hotel/' + id), {headers: this.getHeaders()}) .map(response => response.json());
        }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}