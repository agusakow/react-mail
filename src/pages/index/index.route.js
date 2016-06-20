import Index from './index.jsx';
import Route from '../../js/route';

import foldersActions from '../../actions/foldersActions';

class IndexRoute extends Route {
    constructor() {
        super();
        this.name = "index";
        this.component = Index;
    }

    fetch(nextState) {
        return foldersActions.getAll();
    }
}

export default new IndexRoute();
