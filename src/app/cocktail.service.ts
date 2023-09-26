import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  list: Cocktail[] = [
    {
      name: "cocktail 1",
      price: 8,
      imageUrl: "omgimage"
    },
    {
      name: "cocktail 2",
      price: 10,
      imageUrl: "omgimage2"
    }
  ]

  getCocktails(): Cocktail[] {
    return this.list;
    
  }
}
