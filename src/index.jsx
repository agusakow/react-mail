import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './js/routes';
import Loading from './blocks/loading/loading.jsx';
import Header from './blocks/header/header.jsx';


// function createElement(Component, props) {
//     if (Component == Router) {
//         return <div className="reactRoot" {...props} />
//     } else {
//         return <Component {...props} />
//     }
// }

var layout = (
    <div className="root" >
        <Loading />
        <Header />
        <Router routes={routes} history={browserHistory}/>
    </div>
)

render(
    layout,
    document.getElementById('root-wrapper')
);
