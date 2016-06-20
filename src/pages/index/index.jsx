import React from 'react';
import Page from '../../js/page';
import Folders from '../../blocks/folders/folders.jsx';
import foldersStore from '../../stores/foldersStore';
import foldersActions from '../../actions/foldersActions';
import { events } from '../../js/consts';

export default class Index extends Page {
    constructor(props) {
        super(props);
        this.state = this.getState();
        this.onStoreChange = this.onStoreChange.bind(this);
    }

    onCreate() {
        foldersStore.on(events.CHANGE, this.onStoreChange);
    }

    onDestroy() {
        foldersStore.off(events.CHANGE, this.onStoreChange);
    }

    onStoreChange() {
        this.setState(this.getState());
    }

    getState() {
        return { folders: foldersStore.getAll() };
    }

    getDom() {
        return (
            <div className="page-index">
                <div className="page-index__folders">
                    <Folders folders={this.state.folders} level={0}/>
                </div>
                <div className="page-index__main">
                    {this.props.children}
                </div>
            </div>
        );
    }
};
