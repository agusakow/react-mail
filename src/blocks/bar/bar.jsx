import React from 'react';
import Button from '../button/button.jsx';

import { withRouter } from 'react-router';
import appStore from '../../stores/appStore';
import { events } from '../../js/consts';

class Bar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.getState();
        this.onRefreshClick = this.onRefreshClick.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
        appStore.on(events.CHANGE, this.onStoreChange);
    }

    componentWillUnmount() {
        appStore.off(events.CHANGE, this.onStoreChange);
    }

    onRefreshClick(evt) {
        var pageInfo = appStore.getCurrentPageInfo();
        this.props.router.replace(pageInfo.path);
    }

    onStoreChange() {
        this.setState(this.getState());
    }

    getState() {
        var pageInfo = appStore.getCurrentPageInfo();
        return {
            pageName: pageInfo.name
        };
    }

    render() {
        var buttons = [];
        buttons.push(
            <Button className="button_round button_action"
                key="new"
                icon="pencil-white"
                title="New message"/>
        );
        if (this.state.pageName == "message") {
            buttons.push(
                <Button className="button_round"
                    key="reply"
                    icon="docs"
                    title="Reply"/>
            );
            buttons.push(
                <Button className="button_round"
                    key="replyAll"
                    icon="docs2"
                    title="Reply all"/>
            );
            buttons.push(
                <Button className="button_round"
                    key="trash"
                    icon="trash"
                    title="Move to trash"/>
            );
        }
        buttons.push(
            <Button className="button_round"
                key="refresh"
                icon="refresh"
                title="Refresh"
                onClick={this.onRefreshClick}/>
        );
        return (
            <div className="bar">
                {buttons}
            </div>
        );
    }
};

export default withRouter(Bar);
