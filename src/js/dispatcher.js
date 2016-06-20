import { Dispatcher } from 'flux';

var dispatcher = new Dispatcher();
dispatcher.dispatch = function() {
    console.log(arguments);
    Dispatcher.prototype.dispatch.apply(this, arguments);
}

export default dispatcher;
