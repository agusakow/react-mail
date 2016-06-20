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
        var className = 'page page-folder';
        var messages;
        var emptyMsg;
        var isEmpty = !this.state.messages || !this.state.messages.length;
        if (isEmpty) {
            emptyMsg = (
                <div>
                    This folder is empty...
                </div>
            );
            className += ' page-folder_empty';
        } else {
            messages = this.state.messages.map(message =>
                <Message message={message} key={message.id}/>
            );
        }

        return (
            <div className={className}>
                {emptyMsg}
                <ul class="page-folder__messages">
                    {messages}
                </ul>
            </div>
        );
    }
};
