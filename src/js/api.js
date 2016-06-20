import utils from './utils';

/**
 * Base class for imitation ajax requests.
 */
export default class Api {
    request(url, data) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, utils.random(500, 1700));
        });
    }

    get(url) {
        return this.request(url);
    }

    post(url, data) {
        return this.request(url, data);
    }
}
