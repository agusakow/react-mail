import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component{
    render() {
        var className = 'link';
        if (this.props.className) {
            className += ` ${this.props.className}`;
        }
        return (
            <Link {...this.props} className={ className }>
                {this.props.children}
            </Link>
        );
    }
};
