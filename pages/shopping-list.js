
const I = actor();

module.exports = {

  addIngredient(name, amount){
  	I.fillField('Name', name);
	I.fillField('#amount', amount);
	I.click('Add');
  },

  updateIngredient(name, amount){
  	I.click('.list-group-item')
  	I.fillField('Name', name);
	I.fillField('#amount', amount);
	I.click('Update');
  },

  async deleteIngredient(){
  	I.click('.list-group-item')
	const ingredientText = await I.grabTextFrom('.list-group-item')
	I.see(ingredientText[0])
	I.click('Delete')
	I.dontSee(ingredientText[0])
  }
}
