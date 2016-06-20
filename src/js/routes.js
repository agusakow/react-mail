import App from '../app.jsx';

import indexRoute from '../pages/index/index.route.js';
import folderRoute from '../pages/folder/folder.route.js';
import messageRoute from '../pages/message/message.route.js';
import searchRoute from '../pages/search/search.route.js';

export default {
    path: '/',
    component: App,
    indexRoute: {
        getComponent: indexRoute.getComponent
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
        }
    ]
}
