import React from 'react';
import Page from '../../js/page';
import Avatar from '../../blocks/avatar/avatar.jsx';

import messageStore from '../../stores/messageStore';
import messagesActions from '../../actions/messagesActions';
import { events } from '../../js/consts';

export default class Message extends Page {
    constructor(params) {
        super(params);
        this.state = this.getState();
        this.onStoreChange = this.onStoreChange.bind(this);
    }

    fetch(props) {
        messagesActions.getById(props.params.id);
    }

    onCreate() {
        messageStore.on(events.CHANGE, this.onStoreChange);
    }

    onDestroy() {
        messageStore.off(events.CHANGE, this.onStoreChange);
    }

    onStoreChange() {
        this.setState(this.getState());
    }

    getState() {
        return {
            message: messageStore.get()
        };
    }

    getDom() {
        var message = this.state.message || {};
        return (
            <div className="page page-message">
                <div className="page-message__header">
                    <Avatar size="L"
                        login={message.from}
                        color={message.color}/>
                    <div className="page-message__info">
                        <div className="page-message__title">
                            { message.title }
                        </div>
                        <div className="page-message__from">
                            { message.from }
                        </div>
                    </div>
                    <span className="page-message__line"/>
                    <div className="page-message__content">
                        { message.content }
                    </div>
                </div>
            </div>
        );
    }
};
