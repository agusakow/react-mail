import Message from './message.jsx';
import Route from '../../js/route';

import messagesActions from '../../actions/messagesActions';

class MessageRoute extends Route {
    constructor() {
        super();
        this.name = "message";
        this.component = Message;
    }

    fetch(nextState) {
        var id = nextState.params.id;
        return messagesActions.getById(id);
    }
}

export default new MessageRoute();
