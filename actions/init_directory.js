const INIT_DIRECTORY = 'INIT_DIRECTORY';

var initDirectoryAction = () => {
    return ({
        type   : INIT_DIRECTORY,
        payload: {
            postName: '/getDirectory.node',
            jsonData: {}
        }
    });
};

export {
    INIT_DIRECTORY,
    initDirectoryAction
}