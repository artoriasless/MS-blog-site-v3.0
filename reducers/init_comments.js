import common_dataDeepCopy from '../modules/common_data_deep_copy';

var initCommentsFunc = (originState, action) => {
    var newState = Object.assign ? Object.assign({}, originState) : common_dataDeepCopy(originState),
        comments = action.payload.data;

    delete newState.comments;
    newState.comments = comments;

    return newState;
};

export default initCommentsFunc;