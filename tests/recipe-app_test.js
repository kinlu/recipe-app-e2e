
Feature('Add recipe to shopping list');

const data = {
	recipe: 'Chinese Chicken',
	new_ingredient: {
		name: 'Chinese toufu',
		amount: '20'
	},
	update_ingredient: {
		name: 'Chinese new spices',
		amount: '5'
	}
}

Scenario('Add ingredient', (I, recipesPage, shoppinglistPage) => {
	I.amOnPage('https://receipe-app.herokuapp.com/');
	I.see('Recipe Book');

	recipesPage.addToShoppingList(data.recipe);
	shoppinglistPage.addIngredient(data.new_ingredient.name, data.new_ingredient.amount);
	const ingredientText = data.new_ingredient.name + ' (' + data.new_ingredient.amount + ')'
	I.see(ingredientText);

});

Scenario('Update ingredient', (I, recipesPage, shoppinglistPage) => {
	I.amOnPage('https://receipe-app.herokuapp.com/');
	I.see('Recipe Book');

	recipesPage.addToShoppingList(data.recipe);
	shoppinglistPage.updateIngredient(data.update_ingredient.name, data.update_ingredient.amount);

	const ingredientText = data.update_ingredient.name + ' (' + data.update_ingredient.amount + ')'
	I.see(ingredientText);

});

Scenario('Delete ingredient', async(I, recipesPage, shoppinglistPage) => {
	I.amOnPage('https://receipe-app.herokuapp.com/');
	I.see('Recipe Book');

	recipesPage.addToShoppingList(data.recipe);
	shoppinglistPage.deleteIngredient();

});
