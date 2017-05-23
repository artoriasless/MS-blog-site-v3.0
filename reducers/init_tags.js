import common_dataDeepCopy from '../modules/common_data_deep_copy';

var initTagsFunc = (originState, action) => {
    var newState = Object.assign ? Object.assign({}, originState) : common_dataDeepCopy(originState),
        tags     = action.payload.data;
        
    delete newState.tags;
    newState.tags = tags;
    return newState;
};

export default initTagsFunc;