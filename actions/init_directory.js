const INIT_DIRECTORY = 'INIT_DIRECTORY';

var initDirectoryAction = (data) => {
    return ({
        type   : INIT_DIRECTORY,
        payload: {
            data: data
        }
    });
};

export {
    INIT_DIRECTORY,
    initDirectoryAction
}