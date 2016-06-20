var actions = {
    folders: {
        GET_ALL: 'foldersGetAll',
        GET_ALL_SUCCESS: 'foldersGetAllSuccess',
        GET_ALL_ERROR: 'foldersGetAllError',

        GET_BY_ID: 'foldersGetById',
        GET_BY_ID_SUCCESS: 'foldersGetByIdSuccess',
        GET_BY_ID_ERROR: 'foldersGetByIdError',

        SET_SELECTED: 'setSelected',
        TOGGLE_EXPANDED: 'toggleExpanded',
        CHANGE_UNREADED: 'changeUnreaded'
    },

    messages: {
        GET_BY_FOLDER: 'messagesGetByFolder',
        GET_BY_FOLDER_SUCCESS: 'messagesGetByFolderSuccess',
        GET_BY_FOLDER_ERROR: 'messagesGetByFolderError',

        GET_BY_ID: 'messagesGetById',
        GET_BY_ID_SUCCESS: 'messagesGetByIdSuccess',
        GET_BY_ID_ERROR: 'messagesGetByIdError',

        FIND: 'find',
        FIND_SUCCESS: 'findSuccess',
        FIND_ERROR: 'findError'
    },

    app: {
        SET_LOADING: 'setLoading',
        SET_CURRENT: 'setCurrent'
    }
};

var events = {
    CHANGE: 'change'
};

export { actions, events };
