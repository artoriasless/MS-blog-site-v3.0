const INIT_LATEST = 'INIT_LATEST';

var initLatestAction = (data) => {
    return ({
        type   : INIT_LATEST,
        payload: {
            data: data
        }
    });
};

export {
    INIT_LATEST,
    initLatestAction
}