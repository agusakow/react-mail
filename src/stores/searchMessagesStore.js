import Store from '../js/store';
import dispatcher from '../js/dispatcher';
import { actions } from '../js/consts';

var _messages = [];

var setMessages = (messages) => {
    _messages = messages;
};

var markReaded = (message) => {
    var unreadedMessage = _messages.find(msg => msg.id == message.id);
    if (unreadedMessage) {
        unreadedMessage.unreaded = false;
    }
}

class MessagesStore extends Store {
    constructor() {
        super();
        this.register();
    }

    getAll() {
        return _messages;
    }

    register() {
        this.token = dispatcher.register(action => {
            var actionType = action.actionType;
            var data = action.data;
            switch (action.actionType) {
                case actions.messages.FIND_SUCCESS:
                    setMessages(data.messages);
                    this.emit();
                    break;

                case actions.messages.GET_BY_ID_SUCCESS:
                    markReaded(data.message);
                    this.emit();
                    break;

                default:
                    break;
            }
        });
    }
};

export default new MessagesStore();
