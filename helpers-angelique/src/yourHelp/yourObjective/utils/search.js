/**
 * Recherche une recette parmi une liste de recettes
 * @param {array} recipes 
 * @param {string} keyword 
 * @returns 
 */
const search = (recipes, keyword) => {
    let result = '';

    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i] === keyword ) {
            result = recipes[i];
            break;
        }            
    }

    return result;
};

export default search;