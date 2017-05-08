const LOADING = 'LOADING';

var loadingAction = () => {
    return ({
        type   : LOADING,
        payload: {}
    });
};

export {
    LOADING,
    loadingAction
}