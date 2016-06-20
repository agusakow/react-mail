import App from '../app.jsx';

import indexRoute from '../pages/index/index.route.js';
import folderRoute from '../pages/folder/folder.route.js';
import messageRoute from '../pages/message/message.route.js';
import searchRoute from '../pages/search/search.route.js';
import page404Route from '../pages/404/404.route.js';

export default {
    path: '/',
    component: App,
    indexRoute: {
        getComponent: indexRoute.getComponent,
        onEnter: (nextState, replace) => { replace('/mail/inbox') }
    },
    childRoutes: [
        {
              path: 'mail',
              getComponent: indexRoute.getComponent,
              childRoutes: [{
                  path: ':id',
                  getComponent: folderRoute.getComponent
              }]
        },
        {
              getComponent: indexRoute.getComponent,
              childRoutes: [{
                  path: 'message/:id',
                  getComponent: messageRoute.getComponent
              }, {
                  path: 'search',
                  getComponent: searchRoute.getComponent
              }]
        },
        {
            path: '*',
            getComponent: page404Route.getComponent
        }
    ]
}
