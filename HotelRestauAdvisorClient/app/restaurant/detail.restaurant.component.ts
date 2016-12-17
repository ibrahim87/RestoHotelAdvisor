import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant} from "./Restaurant";
import {RestaurantService} from "./restraurant.service";


@Component({
    selector: 'detail',
    templateUrl: "../app/restaurant/detailRestaurant.html"
})
export class DetailRestaurantComponent implements OnInit {
    
    public Id:string = "";
    public restaurant:Restaurant = new Restaurant();

    constructor(private route:ActivatedRoute, private restaurantService:RestaurantService) {
    }

    ngOnInit() {
        this.Id = this.route.snapshot.params['Id'];
        this.restaurantService.getRestaurantById(this.Id) .subscribe(p => {
            this.restaurant = p;
        }, err => {
            console.log(err);
        });
    }
}