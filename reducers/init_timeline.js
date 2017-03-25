var initTimelinerFunc = (originState = [], action) => {
    var newState = Object.assign({}, originState),
        timeline = [
            {   
                timeline   : '2011-11-11',
                papersCount: '1'
            }
        ];

    delete newState.timeline;
    newState.timeline = timeline;

    return newState;
};

export default initTimelinerFunc;