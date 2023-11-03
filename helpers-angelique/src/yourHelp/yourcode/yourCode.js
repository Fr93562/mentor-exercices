const data = [ 'carotte', 'persil', 'oignon' ];

/**
 * Voici un "copier coller" de ton code
 * Je l'ai simplifié pour se concentrer sur l'essentiel (et par fénéantise aussi)
 * 
 * Ta fonction porte une seconde fonction qui est find. Find est appellée uniquement en cas de clic sur le bouton
 * Elle mélange à la fois de l'event, de la vue et de l'algo
 */

const search = () => {
    let result = '';

    const find = (e) => {
        const element = e.srcElement;
        const text = element.innerHTML;

        for (let i = 0; i < data.length; i++) {
            if (data[i] === text ) {
                result = data[i];
                break;
            }            
        }

        let container = document.getElementById('result');
        container.innerHTML = text;
    };

    const button = document.getElementById('exo1');
    button.addEventListener('click', find);
};

search();