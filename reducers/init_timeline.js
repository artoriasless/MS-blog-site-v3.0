import common_dataDeepCopy from '../modules/common_data_deep_copy';

var initTimelinerFunc = (originState, action) => {
    var newState = Object.assign ? Object.assign({}, originState) : common_dataDeepCopy(originState),
        timeline = action.payload.data;

    delete newState.timeline;
    newState.timeline = timeline;

    return newState;
};

export default initTimelinerFunc;