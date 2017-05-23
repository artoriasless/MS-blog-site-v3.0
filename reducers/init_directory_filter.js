import common_dataDeepCopy from '../modules/common_data_deep_copy';

var initDirectoryFilterFunc = (originState, action) => {
    var newState        = Object.assign ? Object.assign({}, originState) : common_dataDeepCopy(originState),
        directoryFilter = action.payload.data;

    delete newState.directoryFilter;
    newState.directoryFilter = directoryFilter;

    return newState;
};

export default initDirectoryFilterFunc;