var initDirectoryFilterFunc = (originState, action) => {
    var newState        = Object.assign({}, originState),
        directoryFilter = action.payload.data;

    delete newState.directoryFilter;
    newState.directoryFilter = directoryFilter;

    return newState;
};

export default initDirectoryFilterFunc;