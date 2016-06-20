import React from 'react';
import appStore from '../../stores/appStore';
import { events } from '../../js/consts';

export default class Loading extends React.Component {
    constructor(params) {
        super(params);
        this.state = this.getState();
        this.onStoreChange = this.onStoreChange.bind(this);
        appStore.on(events.CHANGE, this.onStoreChange);
    }

    componentWillUnmount() {
        appStore.off(events.CHANGE, this.onStoreChange);
    }

    onStoreChange() {
        this.setState(this.getState());
    }

    getState() {
        return {
            loading: appStore.isLoading()
        };
    }

    render() {
        var className = "loading";
        var items = [];
        for (var i = 1; i < 10; i++) {
            items.push(
                <span className={`loading__spinner-item loading__spinner-item_${i}`}>
                </span>
            );
        }
        if (!this.state.loading) {
            className += ' loading_hidden';
        }
        return (
            <div className={className} ref="container">
                <span className="loading__spinner">
                    {items}
                </span>
            </div>
        );
    }
};
