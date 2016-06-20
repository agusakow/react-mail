import Store from '../js/store';
import dispatcher from '../js/dispatcher';
import { actions } from '../js/consts';
import messageStore from './messageStore';
import foldersStore from './foldersStore';

var _messages = [];
var _folderId = -1;

var setMessages = (messages) => {
    _messages = messages;
};

var setFolderId = (folderId) => {
    _folderId = folderId;
}

var markReaded = (message) => {
    if (!message) {
        return;
    }
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

    getFolderId() {
        return _folderId;
    }

    register() {
        this.token = dispatcher.register(action => {
            var actionType = action.actionType;
            var data = action.data;
            switch (action.actionType) {
                case actions.messages.GET_BY_FOLDER_SUCCESS:
                    dispatcher.waitFor([foldersStore.token]);
                    setMessages(data.messages);
                    setFolderId(data.folderId);
                    markReaded(messageStore.get());
                    this.emit();
                    break;

                case actions.messages.GET_BY_ID_SUCCESS:
                    dispatcher.waitFor([foldersStore.token]);
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
