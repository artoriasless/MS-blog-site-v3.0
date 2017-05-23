import common_dataDeepCopy from '../modules/common_data_deep_copy';

var initLatestFunc = (originState, action) => {
    var newState = Object.assign ? Object.assign({}, originState) : common_dataDeepCopy(originState),
        latest   = action.payload.data;

    delete newState.latest;
    newState.latest = latest;

    return newState;
};

export default initLatestFunc;