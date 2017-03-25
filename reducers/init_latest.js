var initLatestFunc = (originState, action) => {
    var newState = Object.assign({}, originState),
        latest   = [
            {   
                id   : '1',
                title: 'test latest paper title...',
                date : '2011-11-11'
            }
        ];

    delete newState.latest;
    newState.latest = latest;

    return newState;
};

export default initLatestFunc;