
const I = actor();

module.exports = {
  addToShoppingList(recipe){
  	I.click(recipe);
	I.click('Manage Recipes');
	I.click('Add to shopping List');
  },

  landOnRecipeApp(){
  	I.amOnPage('https://receipe-app.herokuapp.com/');
	I.see('Recipe Book');
  }

}
