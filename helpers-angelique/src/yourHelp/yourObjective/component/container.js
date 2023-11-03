/**
 * Affiche le résultat dans le container
 * @param {string} text 
 */
const container = (text) => {
    const component = document.getElementById('result');
    component.innerHTML = text;
};

export default container;