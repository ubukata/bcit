import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodService } from './service.food';
import { FoodItem } from './FoodItem';

@Component({
    templateUrl: './detail.html',
    styles: ['table { width: 40%; margin: 2% 0 0 -23%; } td { text-align: right; }'],
    providers: [FoodService]
})

export class FoodDetailComponent {
    private _foodId: number;
    public selectedFood: FoodItem;

    constructor(private route: ActivatedRoute, private foodService: FoodService){
    }

    getSelectedFood(){
        this.foodService.getFoodById(this._foodId).then(food =>this.selectedFood = food);
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this._foodId = params['id'];
            this.getSelectedFood();
        });
    }
}