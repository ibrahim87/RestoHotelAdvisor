import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantService} from "./restraurant.service";
import {Restaurant} from "./Restaurant";
@Component({selector: 'restaurants', templateUrl: "../app/restaurant/ListingRestaurants.html"})

export class ListingRestaurantComponent implements OnInit {
    restaurants:Restaurant[] = [];

    constructor(private route:ActivatedRoute,private restaurantService:RestaurantService){
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            // let category = params['Category'];
            // console.log('ngOnInit', category);
            // if (category != null) {
                // this.hotelService.ChercherParCategorie(category).subscribe(p => {
                //     this.hotels = p;
                // }, err => {
                //     console.log(err);
                // });
            // } else {
                this.restaurantService.RecupererRestaurants().subscribe(p => {
                    this.restaurants = p;
                }, err => {
                    console.log(err);
                });
            // }
        });
    }
}
