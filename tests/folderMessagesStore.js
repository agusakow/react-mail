jest.dontMock('../src/stores/folderMessagesStore');
jest.dontMock('../src/stubs/messages.js');
jest.dontMock('../src/stubs/folders.js');

var messageStubs = require('../src/stubs/messages.js').default;
var folderStubs = require('../src/stubs/folders.js').default;

import {actions} from '../src/js/consts';

describe('FolderMessagesStore', function() {
    var callback;
    var dispatcher;
    var folderMessagesStore;

    var folder = folderStubs[0];
    var messages = messageStubs.filter(item =>
        folder.messages.indexOf(item.id) != -1);

    var actionGetByFolder = actionGetByFolder = {
        actionType: actions.messages.GET_BY_FOLDER_SUCCESS,
        data: {
            messages: messages,
            folderId: folder.id
        }
    };

    beforeEach(function() {
        dispatcher = require('../src/js/dispatcher.js').default;
        folderMessagesStore = require('../src/stores/folderMessagesStore').default;
        callback = dispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', function() {
        expect(dispatcher.register.mock.calls.length).toBe(1);
    });

    it('initialize empty', function() {
        var messages = folderMessagesStore.getAll();
        expect(messages).toEqual([]);
        var folderId = folderMessagesStore.getFolderId();
        expect(folderId).toEqual(-1);
    });

    it('get messages by folder id', function() {
        callback(actionGetByFolder);
        var messages = folderMessagesStore.getAll();
        expect(messages).toEqual(actionGetByFolder.data.messages);
        var folderId = folderMessagesStore.getFolderId();
        expect(folderId).toEqual(actionGetByFolder.data.folderId);
    });
});
