const INIT_TAGS = 'INIT_TAGS';

var initTagsAction = (data) => {
    return ({
        type   : INIT_TAGS,
        payload: {
            data: data
        }
    });
};

export {
    INIT_TAGS,
    initTagsAction
}