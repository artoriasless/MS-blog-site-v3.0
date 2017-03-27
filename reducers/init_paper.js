var initPaperFunc = (originState, action) => {
    var newState     = Object.assign({}, originState),
        paperListObj = action.payload;
        
    delete newState.paperListObj;
    newState.paperListObj = paperListObj;
    return newState;
};

export default initPaperFunc;