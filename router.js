import Stories from './pages/stories.js';

const router = new Navigo(null, true, '#');

export default class RouterHandler {
    constructor() {
        this.createRoutes();
    }

    createRoutes() {
        const routes = [
            { path: '/', page: Stories },
            { path: '/new', page: Stories },
            { path: '/ask', page: Stories },
            { path: '/show', page: Stories }
        ];

        routes.forEach(({ path, page }) => { // here we have destructured our object for better readability
            router.on(path, () => {
                page(path);
            }).resolve();
        });
    }

    
}