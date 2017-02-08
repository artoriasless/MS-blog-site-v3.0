const GET_PAPER = 'GET_PAPER';

var getPaperAction = (paperId) => {
    return ({
        type   : GET_PAPER,
        payload: {
            postName: '/getPaper',
            paperId : paperId
        }
    });
};

export {
    GET_PAPER, 
    getPaperAction
};