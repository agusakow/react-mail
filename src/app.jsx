import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
});
