/**
 * Récupère le contenu du bouton
 * @returns - string
 */
const button = () => {
    let content = '';
    const component = document.getElementById('exo1');
    content = component.innerHTML;

    return content;
};

export default {
    button,
}