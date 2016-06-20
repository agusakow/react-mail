import Folder from './folder.jsx';
import Route from '../../js/route';

import messagesActions from '../../actions/messagesActions';
import foldersActions from '../../actions/foldersActions';

class FolderRoute extends Route {
    constructor() {
        super();
        this.name = "folder";
        this.component = Folder;
    }

    fetch(nextState) {
        var id = nextState.params.id;
        return messagesActions.getByFolder(id);
    }
}

export default new FolderRoute();
