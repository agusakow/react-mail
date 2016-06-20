import Store from '../js/store';
import dispatcher from '../js/dispatcher';
import { actions } from '../js/consts';

var _message = {};

var setMessage = (message) => {
    _message = message;
};

class MessageStore extends Store {
    constructor() {
        super();
        this.register();
    }

    get() {
        return _message;
    }

    register() {
        this.token = dispatcher.register(action => {
            var actionType = action.actionType;
            var data = action.data;
            switch (action.actionType) {
                case actions.messages.GET_BY_ID_SUCCESS:
                    setMessage(data.message);
                    this.emit();
                    break;

                default:
                    break;
            }
        });
    }
};

export default new MessageStore();
