import React from 'react';
import { browserHistory } from 'react-router';
import { events } from '../../js/consts';
import appStore from '../../stores/appStore';

export default class Header extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = this.getState();
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onLogoClick = this.onLogoClick.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        appStore.on(events.CHANGE, this.onStoreChange);
    }

    componentWillUnmount() {
        appStore.off(events.CHANGE, this.onStoreChange);
    }

    onKeyPress(evt) {
        if (evt.which == 13) {
            this.onSearchClick();
        }
    }

    onInputChange(evt) {
        this.setState({ text: evt.target.value })
    }

    onSearchClick(evt) {
        var value = this.refs.search.value;
        browserHistory.push(`/search?text=${value}`);
    }

    onLogoClick() {
        browserHistory.push('/');
    }

    onStoreChange() {
        this.setState(this.getState());
    }

    getState() {
        var pageInfo = appStore.getCurrentPageInfo();
        if (!pageInfo) {
            return { text: '' }
        }
        var text = pageInfo.name == 'search' ? pageInfo.query.text : '';
        return {
            text: text
        };
    }

    render() {
        return (
            <div className="header">
                <span className="header__left">
                    <span className="header__logo"
                        onClick={this.onLogoClick}>
                        Mailbox
                    </span>
                </span>
                <span className="header__center">
                    <span className="header__search-wrapper">
                        <input className="header__search"
                            type="text"
                            placeholder="Search text"
                            ref="search"
                            onKeyPress={this.onKeyPress}
                            onChange={this.onInputChange}
                            value={this.state.text}/>
                        <span className="icon icon_search icon_hover"
                            onClick={this.onSearchClick}/>
                    </span>
                </span>
            </div>
        );
    }
};
