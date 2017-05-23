import common_dataDeepCopy from '../modules/common_data_deep_copy';

var initPaperFunc = (originState, action) => {
    var newState     = Object.assign ? Object.assign({}, originState) : common_dataDeepCopy(originState),
        paperListObj = action.payload;
        
    delete newState.paperListObj;
    newState.paperListObj = paperListObj;
    return newState;
};

export default initPaperFunc;