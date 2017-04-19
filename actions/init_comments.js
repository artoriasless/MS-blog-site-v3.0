const INIT_COMMENTS = 'INIT_COMMENTS';

var initCommentsAction = (data) => {
    return ({
        type   : INIT_COMMENTS,
        payload: {
            data: data
        }
    });
};

export {
    INIT_COMMENTS,
    initCommentsAction
}