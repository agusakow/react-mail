import Api from '../js/api';
import folders from '../stubs/folders';
import messages from '../stubs/messages';
import palette from '../js/palette';

/**
 * Init stubs, settings message's folderId, color.
 * @param {Array} folders to init
 */
var initStubs = (folders) => {
    for (let folder of folders) {
        if (!folder.messages) {
            continue;
        }
        for (let messageId of folder.messages) {
            let message = messages.find(message => message.id == messageId);
            message.folderId = folder.id;
            message.color = palette();
        }
        if (folder.subfolders) {
            initStubs(folder.subfolders);
        }
    }
}

initStubs(folders);

class MessagesApi extends Api {
    getByFolder(folderId) {
        return this.get().then(() => {
            var folder = folders.find(folder => folder.id == folderId);
            if (!folder) {
                return { messages: [], folderId: -1 }
            }
            var folderMessages = messages.filter(
                message => folder.messages.indexOf(message.id) != -1
            );
            return { messages: folderMessages, folderId: folderId };
        });
    }

    getById(id) {
        return this.get().then(() => {
            var message = messages.find(message => message.id == id);
            return { message: message };
        });
    }

    find(text) {
        return this.get().then(() => {
            var regExp = new RegExp(text, "i");
            var resultMessages = messages.filter(message =>
                regExp.test(message.title)
            );
            return { messages: resultMessages };
        });
    }
}

export default new MessagesApi();
