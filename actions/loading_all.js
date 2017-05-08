const LOADING_ALL = 'LOADING_ALL';

var loadingAllAction = () => {
    return ({
        type   : LOADING_ALL,
        payload: {}
    });
};

export {
    LOADING_ALL,
    loadingAllAction
}