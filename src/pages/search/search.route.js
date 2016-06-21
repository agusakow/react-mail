import Search from './search.jsx';
import Route from '../../js/route';

import messagesActions from '../../actions/messagesActions';

class SearchRoute extends Route {
    constructor() {
        super();
        this.name = "search";
        this.component = Search;
    }

    fetch(nextState) {
        return messagesActions.find(nextState.location.query.text);
    }
}

export default new SearchRoute();
