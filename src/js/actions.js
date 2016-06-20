import dispatcher from './dispatcher';

export default class Action {
    wrapRequest(promise, successConst, errorConst) {
        return promise.then(
            (data) => this.dispatch(successConst, data),
            (error) => this.dispatch(errorConst, error)
        );
    }

    dispatch(actionType, data) {
        dispatcher.dispatch({
            actionType: actionType,
            data: data
        });
    }
}
