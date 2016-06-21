import React from 'react';
import Page from '../../js/page';
import Message from '../../blocks/message/message.jsx';
import messagesStore from '../../stores/searchMessagesStore';
import { events } from '../../js/consts';

export default class Search extends Page {
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
        var className = 'page page-search';
        var messages;
        var emptyMsg;
        var isEmpty = !this.state.messages || !this.state.messages.length;
        if (isEmpty) {
            emptyMsg = (
                <div>
                    Nothing found...
                </div>
            );
            className += ' page-search_empty';
        } else {
            messages = this.state.messages.map(message =>
                <Message message={message} key={message.id}/>
            );
        }

        return (
            <div className={className}>
                {emptyMsg}
                <ul class="messages">
                    {messages}
                </ul>
            </div>
        );
    }
};
