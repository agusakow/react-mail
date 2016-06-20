import Actions from '../js/actions';
import { actions } from '../js/consts';
import foldersApi from '../api/foldersApi';

class FoldersActions extends Actions {
    getAll() {
        this.dispatch(actions.folders.GET_ALL);
        return this.wrapRequest(
            foldersApi.getAll(),
            actions.folders.GET_ALL_SUCCESS,
            actions.folders.GET_ALL_ERROR
        );
    }

    toggleExpanded(id) {
        this.dispatch(actions.folders.TOGGLE_EXPANDED, { id: id });
    }
}

export default new FoldersActions();
