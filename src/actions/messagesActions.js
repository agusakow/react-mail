import Actions from '../js/actions';
import { actions } from '../js/consts';
import messagesApi from '../api/messagesApi';

class MessagesActions extends Actions {
    getByFolder(folderId) {
        this.dispatch(actions.messages.GET_BY_FOLDER);
        return this.wrapRequest(
            messagesApi.getByFolder(folderId),
            actions.messages.GET_BY_FOLDER_SUCCESS,
            actions.messages.GET_BY_FOLDER_ERROR
        );
    }

    getById(id) {
        this.dispatch(actions.messages.GET_BY_ID);
        return this.wrapRequest(
            messagesApi.getById(id),
            actions.messages.GET_BY_ID_SUCCESS,
            actions.messages.GET_BY_ID_ERROR
        );
    }

    find(text) {
        this.dispatch(actions.messages.FIND);
        return this.wrapRequest(
            messagesApi.find(text),
            actions.messages.FIND_SUCCESS,
            actions.messages.FIND_ERROR
        );
    }
}

export default new MessagesActions();
