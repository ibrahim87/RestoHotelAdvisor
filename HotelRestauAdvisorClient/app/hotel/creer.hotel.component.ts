import {Component} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Hotel} from "./Hotel";
import {HotelService} from "./hotel.service";
import {FileUploader} from 'ng2-file-upload';

@Component({selector: 'hotel', templateUrl: "../app/hotel/CreerHotel.html"})

export class CreerHotelComponent {

    form:FormGroup;

    constructor(fb:FormBuilder, private hotelService:HotelService, private router:Router) {
        this.form = fb.group({
            "Name": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
            "Tel": ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
            "Email": ["", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Adresse": ["", Validators.required],
            "CategorieHotel": ["", Validators.required],
            "Ville": ["", Validators.required],
            "Classification": ["", Validators.required],
            "description": ["", Validators.required],
            "Tarif": ["", Validators.required]
        });
    }

    save(model:Hotel, isValid:boolean) {
        if (isValid) {
            this.hotelService.CreerNouveauHotel(model);

        }
    }


    public uploader:FileUploader = new FileUploader({url: 'http://localhost:8080/upload'});


}
