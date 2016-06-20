import Page404 from './404.jsx';
import Route from '../../js/route';

class Route404 extends Route {
    constructor() {
        super();
        this.name = "404";
        this.component = Page404;
    }

    fetch(nextState) {
        return Promise.resolve({});
    }
}

export default new Route404();
