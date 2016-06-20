import { EventEmitter } from 'events';
import { events } from '../js/consts';

export default class Store extends EventEmitter {
    emit(event) {
        super.emit(event || events.CHANGE);
    }

    off(event, callback) {
        super.removeListener(event, callback);
    }
}
