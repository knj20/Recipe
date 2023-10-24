import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Pizza','Delecious pizza', 'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*')
    ];
}