jest.dontMock('../src/stores/searchMessagesStore');
jest.dontMock('../src/stubs/messages.js');

var messageStubs = require('../src/stubs/messages.js').default;

import {actions} from '../src/js/consts';

describe('SearchMessagesStore', function() {
    var callback;
    var dispatcher;
    var searchMessagesStore;

    var actionFind = {
        actionType: actions.messages.FIND_SUCCESS,
        data: {
            messages: messageStubs
        }
    };

    beforeEach(function() {
        dispatcher = require('../src/js/dispatcher.js').default;
        searchMessagesStore = require('../src/stores/searchMessagesStore').default;
        callback = dispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', function() {
        expect(dispatcher.register.mock.calls.length).toBe(1);
    });

    it('initialize empty', function() {
        var messages = searchMessagesStore.getAll();
        expect(messages).toEqual([]);
    });

    it('find messages by text', function() {
        callback(actionFind);
        var messages = searchMessagesStore.getAll();
        expect(messages).toEqual(actionFind.data.messages);
    });
});
