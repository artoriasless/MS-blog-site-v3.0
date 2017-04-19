var initCommentsFunc = (originState, action) => {
    var newState = Object.assign({}, originState),
        comments = action.payload.data;

    delete newState.comments;
    newState.comments = comments;

    return newState;
};

export default initCommentsFunc;