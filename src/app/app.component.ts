import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Gibby\'s Gibbles';

  recipes: Recipe[] = [
    new Recipe('Bone Bisque'),
    new Recipe('Rawhide Ravioli'),
    new Recipe('Something I dug up from the yard souffle')
  ];
}
