import { Dispatcher } from 'flux';

var dispatcher = new Dispatcher();
dispatcher.dispatch = function() {
    Dispatcher.prototype.dispatch.apply(this, arguments);
};

export default dispatcher;
