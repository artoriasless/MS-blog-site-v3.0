const INIT_PAPER = 'INIT_PAPER';

var initPaperAction = (currentPaperId = '1') => {
    return ({
        type   : INIT_PAPER,
        payload: {
            postName: '/getPaper.node',
            jsonData: {
                currentPaperId: currentPaperId
            }
        }
    });
};

export {
    INIT_PAPER,
    initPaperAction
}