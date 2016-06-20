import React from 'react';
import Page from '../../js/page';
import Message from '../../blocks/message/message.jsx';
import messagesStore from '../../stores/folderMessagesStore';
import messagesActions from '../../actions/messagesActions';
import foldersActions from '../../actions/foldersActions';
import { events } from '../../js/consts';

export default class Folder extends Page {
    constructor(params) {
        super(params);
        this.state = this.getState();
        this.onStoreChange = this.onStoreChange.bind(this);
    }

    onCreate() {
        messagesStore.on(events.CHANGE, this.onStoreChange);
    }

    onDestroy() {
        messagesStore.off(events.CHANGE, this.onStoreChange);
    }

    onStoreChange() {
        this.setState(this.getState());
    }

    getState() {
        return {
            messages: messagesStore.getAll()
        };
    }

    getDom() {
        var messages = this.state.messages.map(message =>
            <Message message={message}/>
        );

        return (
            <ul class="messages">
                {messages}
            </ul>
        );
    }
};
