var initPaperFunc = (originState = {}, action) => {
    var newState = {
        item: 'new paper item'
    };

    console.info('init paper func');
    console.info('action');
    console.info(action);
    console.info('----------');
    return newState;
};

export default initPaperFunc;