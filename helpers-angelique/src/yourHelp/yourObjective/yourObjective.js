import api from './utils/api';
import event from './utils/event';
import search from './utils/search';
import content from './utils/content';
import container from './component/container';

/**
 * Affiche la recette dans le container
 */
const yourObjective = () => {
    // Récupération des données
    const recipes = api.getRecipes();

    // Action à réaliser en cas de clic
    const action = () => {
        const keyword = content.button();
        const result = search(recipes, keyword);
        
        container(result);
    }

    // Ajoute l'action à réaliser au bouton
    event.onButton(action);
};

export default yourObjective;