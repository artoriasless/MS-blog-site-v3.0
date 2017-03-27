var initLatestFunc = (originState, action) => {
    var newState = Object.assign({}, originState),
        latest   = action.payload.data;

    delete newState.latest;
    newState.latest = latest;

    return newState;
};

export default initLatestFunc;