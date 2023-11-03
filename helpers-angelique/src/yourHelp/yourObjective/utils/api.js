import recipes from '../data/recipes';

/**
 * Récupère les recettes
 * @returns - array
 */
const getRecipes = () => {
    const result = recipes;
    return result;
}

export default {
    getRecipes,
};
