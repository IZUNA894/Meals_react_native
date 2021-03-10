class Meal {
  constructor(
    id,
    catergoryIds,

    title,
    affordability,
    complexity,
    imageUrl,
    duration,

    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarion,
    isLactoseFree
  ) {
    this.id = id;
    this.title = title;
    this.catergoryIds = catergoryIds;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.duration = duration;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isLactoseFree = isLactoseFree;
    this.isVegetarion = isVegetarion;
  }
}

export default Meal;
