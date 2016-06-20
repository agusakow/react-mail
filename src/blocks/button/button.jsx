import React from 'react';

export default class extends React.Component{
    render() {
        var className = 'button';
        var title = this.props.title;
        var icon;
        if (this.props.className) {
            className += ` ${this.props.className}`;
        }
        if (this.props.icon) {
            icon = <span className={`icon icon_${this.props.icon}`}/>
        }
        return (
            <button {...this.props} className={className}>
                {icon}
            </button>
        );
    }
};
