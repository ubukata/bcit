import {Injectable} from '@angular/core';
import {FOODITEMS} from './food-data';
import {FoodItem} from './FoodItem';
 
@Injectable()
export class FoodService {
    getFoods(){
        return Promise.resolve(FOODITEMS);
    }
    
    getFoodById(id){
        return Promise.resolve(FOODITEMS.filter(item => {if (item.id === parseInt(id)) return item;})[0]);
    }
}