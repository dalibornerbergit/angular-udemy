import { EventEmitter } from '@angular/core';

import { Recipe } from './recipes.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test',
      'Desc',
      'https://www.foodandwine.com/thmb/YlgBj_G9a_psYSzA3gfU6gx9A3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg'
    ),
    new Recipe(
      'Another Test',
      'Desc',
      'https://www.foodandwine.com/thmb/YlgBj_G9a_psYSzA3gfU6gx9A3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
