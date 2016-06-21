import React from 'react';
import appActions from '../actions/appActions';

export default class Page extends React.Component {
    constructor(params) {
        super(params);
    }

    componentDidMount() {
        if (this.onCreate) {
            this.onCreate();
        }
    }

    componentWillUnmount() {
        if (this.onDestroy) {
            this.onDestroy();
        }
    }

    render() {
        return this.getDom();
    }
};
