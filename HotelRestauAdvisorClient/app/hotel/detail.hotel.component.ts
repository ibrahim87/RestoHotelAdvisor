import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HotelService} from "./hotel.service";
import {Hotel} from "./Hotel";

@Component({
    selector: 'detail',
    templateUrl: "../app/hotel/detailHotel.html"
})
export class DetailHotelComponent implements OnInit {
    
    public Id:string = "";
    public hotel:Hotel = new Hotel();

    constructor(private route:ActivatedRoute, private hotelService:HotelService) {
    }

    ngOnInit() {
        this.Id = this.route.snapshot.params['Id'];
        this.hotelService.getHotelById(this.Id) .subscribe(p => {
            this.hotel = p;
        }, err => {
            console.log(err);
        });
    }
}