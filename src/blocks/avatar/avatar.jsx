import React from 'react';

export default class extends React.Component{
    render() {
        var className="avatar";
        var char = this.props.login ? this.props.login[0] : "";
        var style = {
            'background-color': this.props.color
        };
        if (this.props.size) {
            className += ` avatar_size_${this.props.size}`;
        }
        return (
            <span className={className} style={style}>
                {char}
            </span>
        );
    }
};
