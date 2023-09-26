import { Component } from '@angular/core';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
    constructor(public cocktailService: CocktailService) {}

    cocktails: Cocktail[] = this.cocktailService.getCocktails();
}
