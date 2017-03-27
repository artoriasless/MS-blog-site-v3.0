const INIT_DIRECTORY_FILTER = 'INIT_DIRECTORY_FILTER';

var initDirectoryFilterAction = (data) => {
    return ({
        type   : INIT_DIRECTORY_FILTER,
        payload: {
            data: data
        }
    })
};

export {
    INIT_DIRECTORY_FILTER,
    initDirectoryFilterAction
}