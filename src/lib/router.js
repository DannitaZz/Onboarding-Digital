import { createLogInView } from './view/ingreso.js';
import { infoInView } from './view/info.js';
import { formInView } from './view/form.js';
import { uploadInView } from './view/docs.js';
import { messageInView } from './view/msg.js';


export const changeRoute = (hash) => {
    const mainSection = document.getElementById('main-section');
    mainSection.innerHTML = '';

    switch (hash) {
        case '':
            mainSection.appendChild(infoInView());
            break;
        case '#/info':
            mainSection.appendChild(infoInView());
            break;
        case '#/ingreso':
            mainSection.appendChild(createLogInView());
            break;
        case '#/form':
            mainSection.appendChild(formInView());
            break;
        case '#/docs':
            mainSection.appendChild(uploadInView());
            break;
        case '#/msg':
            mainSection.appendChild(messageInView());
            break;    
        default:
            mainSection.innerHTML = `<h2 class = "error404" >No Existe</h2>`;

    }
};