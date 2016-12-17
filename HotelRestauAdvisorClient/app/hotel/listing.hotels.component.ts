import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HotelService} from './hotel.service';
import {Hotel} from "./Hotel";

@Component({
    selector: 'hotels',
    templateUrl: "../app/hotel/ListingHotels.html"})

export class ListingHotelsComponent implements OnInit {
    hotels:Hotel[] = [];

    constructor(private route:ActivatedRoute,private hotelService:HotelService){
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
                this.hotelService.RecupererHotels().subscribe(p => {
                    this.hotels = p;
                }, err => {
                    console.log(err);
                });
            // }
        });
    }
}
