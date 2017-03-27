var initDirectoryFunc = (originState, action) => {
    var newState  = Object.assign({}, originState),
        directory = action.payload.data;

    delete newState.directory;
    newState.directory = directory;

    return newState;
};

export default initDirectoryFunc;