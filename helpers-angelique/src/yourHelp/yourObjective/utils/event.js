/**
 * Ajoute un événement et une action à un bouton
 * @param {function} action 
 */
const onButton = (action) => {
    const component = document.getElementById('exo1');
    component.addEventListener('click', action);
};

export default {
    onButton,
};