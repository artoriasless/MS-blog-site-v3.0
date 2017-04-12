const ADD_PAPER = 'ADD_PAPER';

var addPaperAction = () => {
    return ({
        type   : ADD_PAPER,
        payload: {
            data: data
        }
    })
};

export {
    ADD_PAPER,
    addPaperAction
}