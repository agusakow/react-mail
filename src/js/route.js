import appActions from '../actions/appActions';

export default class {
    constructor() {
        this.getComponent = this.getComponent.bind(this);
    }

    getComponent(nextState, callback) {
        var self = this;
        this.setLoading(true);
        this.setCurrentPage(nextState);
        this.fetch(nextState).then(() => {
            self.setLoading(false);
            callback(null, self.component);
        });
    }

    setLoading(state) {
        var clearDelay = () => {
            clearTimeout(this.loadingDelay);
            this.loadingDelay = null;
        }
        if (state) {
            appActions.setLoading(state);
            clearDelay();
        } else if (!this.loadingDelay) {
            setTimeout(() => {
                appActions.setLoading(state);
                clearDelay();
            }, 300)
        }
    }

    setCurrentPage(nextState) {
        appActions.setCurrentPage({
            name: this.name,
            path: nextState.pathname,
            params: nextState.params,
            query: nextState.query
        });
    }
}
