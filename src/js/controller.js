import * as model from './model.js';
import recipeView from './view/recipeView.js';
//
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipie = async function () {
  recipeView.re;
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
showRecipie();

['hashChange', 'load'].forEach(event =>
  window.addEventListener(event, showRecipie)
);
