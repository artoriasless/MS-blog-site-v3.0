const LOADING_CONTENT = 'LOADING_CONTENT';

var loadingContentAction = () => {
    return ({
        type   : LOADING_CONTENT,
        payload: {}
    });
};

export {
    LOADING_CONTENT,
    loadingContentAction
}