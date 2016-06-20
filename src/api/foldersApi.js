import Api from '../js/api';
import folders from '../stubs/folders'

class FoldersApi extends Api {
    getAll() {
        return this.get().then(() => {
            return { folders: folders }
        });
    }
}

export default new FoldersApi();
