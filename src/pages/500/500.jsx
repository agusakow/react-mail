import React from 'react';
import Page from '../../js/page';

import appStore from '../../stores/appStore';

export default class Page500 extends Page {
    constructor(params) {
        super(params);
        this.state = this.getState();
    }

    getState() {
        var pageInfo = appStore.getCurrentPageInfo();
        console.log(pageInfo.error);
        return {
            error: pageInfo.error
        }
    }

    getDom() {
        return (
            <div className="page page-500">
                Error:
                <br/>
                {this.state.error.message}
                <div className="page-500__stack">
                    {this.state.error.stack}
                </div>
            </div>
        );
    }
};
