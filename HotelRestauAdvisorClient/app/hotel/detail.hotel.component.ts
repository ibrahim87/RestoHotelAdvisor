import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HotelService} from "./hotel.service";
import {Hotel} from "./Hotel";
import {FormGroup, FormBuilder} from "@angular/forms";
import {UtilisateurService} from "../utilisateur/utilisateur.service";
import {ReservationHotel} from "./ReservationHotel";

@Component({
    selector: 'detail',
    templateUrl: "../app/hotel/detailHotel.html"
})
export class DetailHotelComponent implements OnInit {

    public Id:string = "";
    public hotel:Hotel = new Hotel();
    formReservation:FormGroup;
    str:Number;
    constructor(fb:FormBuilder,private router: Router,private route:ActivatedRoute, private hotelService:HotelService, private loginService: UtilisateurService) {
        this.formReservation = fb.group({
            "IdUtilisateur":loginService._utilisateur.Email,
            "IdHotel":this.route.snapshot.params['Id'],
            "NbrePersonne":[""],
            "NbreChambre":[""],
            "DateArrive":[""],
            "DateDepart":[""],
            "TotalTarif":[""],
            "DateCreation":[new Date().toISOString()]
        });

    }

    ngOnInit() {
        this.Id = this.route.snapshot.params['Id'];
        this.hotelService.getHotelById(this.Id) .subscribe(p => {
            this.hotel = p;
        }, err => {
            console.log(err);
        });
    }

    save(Rmodel:ReservationHotel, isValid:boolean) {
        if (isValid) {
            this.hotelService.CreerNouveauReservationHotel(Rmodel);
        }
    }

    CalculerPrixTotal(prix:number):number {
        let numbre:number = 0;

        numbre = numbre + (+ this.str * +prix);

        return numbre;
    }
    
    
}