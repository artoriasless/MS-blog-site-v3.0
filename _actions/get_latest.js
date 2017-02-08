const GET_LATEST = 'GET_LATEST';

var getLatestAction = () => {
    return ({
        type   : GET_LATEST,
        payload: {
            postName: '/getLatest'
        }
    });
};

export {
    GET_LATEST, 
    getLatestAction
};