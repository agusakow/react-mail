import Actions from '../js/actions';
import { actions } from '../js/consts';

class AppActions extends Actions {
    setLoading(state) {
        this.dispatch(actions.app.SET_LOADING, { state: state });
    }

    setCurrentPage(pageInfo) {
        this.dispatch(actions.app.SET_CURRENT, { pageInfo: pageInfo });
    }
}

export default new AppActions();
