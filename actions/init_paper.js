const INIT_PAPER = 'INIT_PAPER';

var initPaperAction = (currentPaperId, data) => {
    return ({
        type   : INIT_PAPER,
        payload: {
            paperList     : data,
            currentPaperId: currentPaperId
        }
    });
};

export {
    INIT_PAPER,
    initPaperAction
}