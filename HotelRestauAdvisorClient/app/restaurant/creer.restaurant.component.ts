import {Component} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Restaurant} from "./Restaurant";
import {RestaurantService} from "./restraurant.service";
@Component({selector: 'restaurant', templateUrl: "../app/restaurant/CreerRestaurant.html"})

export class CreerRestaurantComponent {

    form:FormGroup;

    constructor(fb:FormBuilder, private restaurantService:RestaurantService, private router:Router) {
        this.form = fb.group({
            "Name": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
            "Tel": ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
            "Email": ["", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Adresse": ["", Validators.required],
            "CategorieRestaurant": [""],
            "Ville": ["", Validators.required],
            "Classification": ["", Validators.required],
            "description": ["", Validators.required],
        });
    }

    save(model:Restaurant, isValid:boolean) {
        if (isValid) {
            this.restaurantService.CreerNouveauRestaurant(model);

        }
    }

}
