jest.dontMock('../src/stores/appStore');

import {actions} from '../src/js/consts';

describe('AppStore', function() {
    var callback;
    var dispatcher;
    var appStore;

    var actionSetLoading = {
        actionType: actions.app.SET_LOADING,
        data: { state: true }
    };

    var actionSetCurrent = {
        actionType: actions.app.SET_CURRENT,
        data: {
            name: 'index',
            path: '/index'
        }
    };

    beforeEach(function() {
        dispatcher = require('../src/js/dispatcher.js').default;
        appStore = require('../src/stores/appStore').default;
        callback = dispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', function() {
        expect(dispatcher.register.mock.calls.length).toBe(1);
    });

    it('initialize empty', function() {
        var loading = appStore.isLoading();
        expect(loading).toBe(false);
        var pageInfo = appStore.getCurrentPageInfo();
        expect(pageInfo).toEqual({});
    });

    it('set loading action', function() {
        callback(actionSetLoading);
        var loading = appStore.isLoading();
        expect(loading).toBe(true);
    });

    it('set page info action', function() {
        callback(actionSetCurrent);
        var pageInfo = appStore.getCurrentPageInfo();
        expect(pageInfo).toEqual(pageInfo);
    });
});
