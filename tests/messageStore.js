jest.dontMock('../src/stores/messageStore');
jest.dontMock('../src/stubs/messages.js');

import {actions} from '../src/js/consts';

describe('MessageStore', function() {
    var callback;
    var dispatcher;
    var messageStore;
    var messageStubs;

    var actionGetById;

    beforeEach(function() {
        messageStubs = require('../src/stubs/messages.js').default;
        dispatcher = require('../src/js/dispatcher.js').default;
        messageStore = require('../src/stores/messageStore').default;
        callback = dispatcher.register.mock.calls[0][0];

        actionGetById = {
            actionType: actions.messages.GET_BY_ID_SUCCESS,
            data: { message: messageStubs[0] }
        };
    });

    it('registers a callback with the dispatcher', function() {
        expect(dispatcher.register.mock.calls.length).toBe(1);
    });

    it('initialize empty', function() {
        var message = messageStore.get();
        expect(message).toEqual({});
    });

    it('message get by id', function() {
        callback(actionGetById);
        var message = messageStore.get();
        expect(message).toEqual(messageStubs[0]);
    });
});
