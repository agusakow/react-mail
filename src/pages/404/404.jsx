import React from 'react';
import Page from '../../js/page';

export default class Page404 extends Page {
    getDom() {
        return (
            <div className="page page-404">
                Sorry, page not found
                <br/>
                =(
            </div>
        );
    }
};
