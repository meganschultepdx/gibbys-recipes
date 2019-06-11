class Recipe {
  tried: boolean = false;
//If constructor() parameters share the exact same name as class properties (like description, or priority in the example above), TypeScript will automatically assign them to a public property of the same name and type.

  constructor (public description: string, public directions: string){ }

  markTried() {
    this.tried = true;
  }
}

let recipes: Recipe[] = [];
recipes.push(new Recipe('Bone Bisque', 'Put bones in pot of water and boil for 2 hours. Reduce heat add corn and simmer for 30mins.'));
recipes.push(new Recipe('Rawhide Ravioli', 'Soak rawhide in water overnight. Then take two pieces and press together around cheese piece. '));
recipes.push(new Recipe('Something I dug up from the yard souffle.', 'Dig up something awesome from the yard, bake delicately between some sort of dough or egg stuff.'));

recipes[0].markTried();

for(let recipe of recipes){
  console.log(recipe);
}
