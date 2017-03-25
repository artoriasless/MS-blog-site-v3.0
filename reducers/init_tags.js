var initTagsFunc = (originState, action) => {
    var newState = Object.assign({}, originState),
        tags     = [
            {   
                tagName    : 'test tag name',
                papersCount: '1'
            }
        ];

    delete newState.tags;
    newState.tags = tags;

    return newState;
};

export default initTagsFunc;