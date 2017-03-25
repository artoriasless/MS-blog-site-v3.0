const INIT_LATEST = 'INIT_LATEST';

var initLatestAction = () => {
    return ({
        type   : INIT_LATEST,
        payload: {
            postName: '/getLatest.node',
            jsonData: {}
        }
    });
};

export {
    INIT_LATEST,
    initLatestAction
}