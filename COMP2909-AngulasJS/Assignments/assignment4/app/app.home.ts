import { Component } from '@angular/core';
import {FoodService} from './service.food';
import {FoodItem} from './FoodItem';

@Component({
    templateUrl: './home.html',
     styles: ['table { width: 40%; margin: 2% 0 0 -4%; }'],
    providers:[FoodService]
})
export class HomeComponent {
    public foods : FoodItem[];

    constructor(private foodService: FoodService) {
        this.getFoods();
    }

    getFoods() {
        this.foodService.getFoods().then(foods => this.foods = foods);
    }
 }
