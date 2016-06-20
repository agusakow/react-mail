import Store from '../js/store';
import dispatcher from '../js/dispatcher';
import { actions } from '../js/consts';

var _loading = false;
var _currentPageInfo = {};

class AppStore extends Store {
    constructor() {
        super();
        this.register();
    }

    isLoading() {
        return _loading;
    }

    getCurrentPageInfo() {
        return _currentPageInfo;
    }

    register() {
        this.token = dispatcher.register(action => {
            var actionType = action.actionType;
            var data = action.data;
            switch (action.actionType) {
                case actions.app.SET_LOADING:
                    _loading = data.state;
                    this.emit();
                    break;
                case actions.app.SET_CURRENT:
                    _currentPageInfo = data.pageInfo
                    this.emit();
                default:
                    break;
            }
        });
    }
};

export default new AppStore();
