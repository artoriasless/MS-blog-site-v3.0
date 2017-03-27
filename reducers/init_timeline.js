var initTimelinerFunc = (originState, action) => {
    var newState = Object.assign({}, originState),
        timeline = action.payload.data;

    delete newState.timeline;
    newState.timeline = timeline;

    return newState;
};

export default initTimelinerFunc;