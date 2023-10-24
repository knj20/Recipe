import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent {
    public ingrediants : Ingredient[] = [
        new Ingredient('tomato', 2),
        new Ingredient('egg', 3),
        new Ingredient('cheese', 5),
    ]
}