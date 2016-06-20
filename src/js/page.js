import React from 'react';
import appActions from '../actions/appActions';

export default class Page extends React.Component {
    constructor(params) {
        super(params);
        //this.loading = true;
    }

    setState(state) {
        //this.loading = false;
        //this.setLoading(false);
        super.setState(state);
    }

    setLoading(state) {
        //setTimeout(() => appActions.setLoading(state), 1);
    }

    componentDidMount() {
        if (this.onCreate) {
            this.onCreate();
        }
        //this.setLoading(true);
        //setTimeout(() => this.fetch(this.props), 1);
    }

    componentWillUnmount() {
        if (this.onDestroy) {
            this.onDestroy();
        }
    }

    componentWillReceiveProps(nextProps) {
        //if (nextProps.params.id != this.props.params.id) {
        //    this.setLoading(true);
        //    this.fetch(nextProps);
        //}
    }

    render() {
        if (this.loading) {
            return null;
        } else {
            return this.getDom();
        }
    }
};
