import common_dataDeepCopy from '../modules/common_data_deep_copy';

var initDirectoryFunc = (originState, action) => {
    var newState  = Object.assign ? Object.assign({}, originState) : common_dataDeepCopy(originState),
        directory = action.payload.data;

    delete newState.directory;
    newState.directory = directory;

    return newState;
};

export default initDirectoryFunc;