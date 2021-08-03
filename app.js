import RouterHandler from './router.js';
import store from './store.js';

window.onhashchange = () => { // helps us detect when the hash router in the url changes
    setActiveLink();
}

function setActiveLink() {
    const links = document.querySelectorAll('.header-link');
    links.forEach(link => {
        const linkPath = link.getAttribute('href'); // this gives the value of the href attribute of every <a> tag.
        const currentPath = window.location.hash;
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

class App {
    constructor() {
        new RouterHandler();
    }
}

new App(); // Do not forget to instanciate!