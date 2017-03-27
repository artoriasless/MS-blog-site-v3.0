var initTagsFunc = (originState, action) => {
    var newState = Object.assign({}, originState),
        tags     = action.payload.data;
        
    delete newState.tags;
    newState.tags = tags;
    return newState;
};

export default initTagsFunc;