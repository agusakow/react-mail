jest.dontMock('../src/stores/foldersStore');
jest.dontMock('../src/stubs/folders.js');
jest.dontMock('../src/stubs/messages.js');

import {actions} from '../src/js/consts';

describe('FoldersStore', function() {
    var callback;
    var dispatcher;
    var foldersStore;
    var messageStore;
    var folderStubs;
    var messageStubs;

    var actionGetAll;
    var actionToggleExpanded;
    var actionMessageGetById;

    beforeEach(function() {
        folderStubs = require('../src/stubs/folders.js').default;
        messageStubs = require('../src/stubs/messages').default;
        dispatcher = require('../src/js/dispatcher.js').default;
        foldersStore = require('../src/stores/foldersStore').default;
        messageStore = require('../src/stores/messageStore').default;

        callback = dispatcher.register.mock.calls[0][0];

        actionGetAll = {
            actionType: actions.folders.GET_ALL_SUCCESS,
            data: { folders: folderStubs }
        };

        actionToggleExpanded = {
            actionType: actions.folders.TOGGLE_EXPANDED,
            data: { id: folderStubs[0].id }
        };

        actionMessageGetById = {
            actionType: actions.messages.GET_BY_ID_SUCCESS,
            data: { message: messageStubs[0] }
        }
    });

    it('registers a callback with the dispatcher', function() {
        expect(dispatcher.register.mock.calls.length).toBe(1);
    });

    it('initialize empty', function() {
        var all = foldersStore.getAll();
        expect(all).toEqual([]);
    });

    it('get all folders', function() {
        callback(actionGetAll);
        var all = foldersStore.getAll();
        expect(all).toEqual(folderStubs);
    });

    it('check folder selection when message is loaded before', function() {
        var message = messageStubs[0];
        messageStore.get.mockReturnValue(message);
        callback(actionGetAll);
        var folder = foldersStore.getById(message.folderId);
        expect(folder.selected).toBe(true);
    });

    it('check folder selection after message is loaded', function() {
        var message = messageStubs[0];
        messageStore.get.mockReturnValue(message);
        callback(actionGetAll);
        callback(actionMessageGetById);
        var folder = foldersStore.getById(message.folderId);
        expect(folder.selected).toBe(true);
    })

    it('toggle expanded', function() {
        var folder, all;
        callback(actionGetAll);
        all = foldersStore.getAll();
        folder = all.find(item => item.id == actionToggleExpanded.data.id);
        expect(!!folder.expanded).toBe(false);
        callback(actionToggleExpanded);
        folder = all.find(item => item.id == actionToggleExpanded.data.id);
        expect(!!folder.expanded).toBe(true);
        callback(actionToggleExpanded);
        folder = all.find(item => item.id == actionToggleExpanded.data.id);
        expect(!!folder.expanded).toBe(false);
    });
});
