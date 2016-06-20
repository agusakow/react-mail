import React from 'react';
import Link from '../link/link.jsx';
import Avatar from '../avatar/avatar.jsx';

export default class Message extends React.Component {
    render() {
        var className = 'message';
        var message = this.props.message;
        var date = (new Date(message.date)).toLocaleDateString();
        var point;
        if (message.unreaded) {
            className += ' message_unreaded';
            point = <span className="message__point"/>
        }
        return (
            <li className={className} key={message.id}>
                <Link to={`/message/${message.id}`}>
                    <Avatar login={message.from} color={message.color} />
                    <span className="message__from">
                        {message.from}
                    </span>
                    <span className="message__title-wrapper">
                        <span className="message__title">
                            {message.title}
                        </span>
                        <span className="message__preview">
                            {message.content}
                        </span>
                    </span>
                    <span className="message__date">
                        {date}
                    </span>
                </Link>
            </li>
        );
    }
};
