import Store from '../js/store';
import dispatcher from '../js/dispatcher';
import { actions } from '../js/consts';
import messageStore from './messageStore';
import folderMessagesStore from './folderMessagesStore';

var _folders = [];
var _flatFolders = [];

var setFolders = (folders) => {
    _folders = folders;
    var pushFolders = (folders) => {
        for (let folder of folders) {
            _flatFolders.push(folder);
            if (folder.subfolders) {
                pushFolders(folder.subfolders);
            }
        }
    }
    pushFolders(folders);
};

var setSelected = (id) => {
    for (let folder of _flatFolders) {
        folder.selected = folder.id == id;
    }
}

var toggleExpanded = (id) => {
    var folder = _flatFolders.find(folder => folder.id == id);
    if (folder) {
        folder.expanded = !folder.expanded;
    }
}

var checkUnreaded = (message) => {
    if (!message || !message.unreaded) {
        return;
    }
    var folder = _flatFolders.find(folder => folder.id == message.folderId);
    if (folder && folder.unreadedCount) {
        folder.unreadedCount--;
    }
    if (folder && folder.unreadedCount < 0) {
        folder.unreadedCount = 0;
    }
}

class FoldersStore extends Store {
    constructor() {
        super();
        this.register();
    }

    getAll() {
        return _folders;
    }

    getById(id) {
        return _folders.find(folder => folder.id == id);
    }

    register() {
        this.token = dispatcher.register(action => {
            var actionType = action.actionType;
            var data = action.data;
            var message = messageStore.get();
            var folderId = folderMessagesStore.getFolderId();
            switch (action.actionType) {
                case actions.folders.GET_ALL_SUCCESS:
                    setFolders(data.folders);
                    checkUnreaded(message);
                    if (message) {
                        setSelected(message.folderId);
                    }
                    if (folderId) {
                        setSelected(folderId);
                    }
                    this.emit();
                    break;
                case actions.folders.TOGGLE_EXPANDED:
                    toggleExpanded(data.id);
                    this.emit();
                    break;

                case actions.messages.GET_BY_ID_SUCCESS:
                    checkUnreaded(data.message);
                    setSelected(data.message.folderId);
                    this.emit();
                    break;
                case actions.messages.GET_BY_FOLDER_SUCCESS:
                    setSelected(data.folderId);
                    this.emit();
                    break;
                case actions.messages.FIND_SUCCESS:
                    setSelected(-1);
                    this.emit();
                    break;

                default:
                    break;
            }
        });
    }
};

export default new FoldersStore();
