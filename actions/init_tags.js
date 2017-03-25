const INIT_TAGS = 'INIT_TAGS';

var initTagsAction = () => {
    return ({
        type   : INIT_TAGS,
        payload: {
            postName: '/getTags.node',
            jsonData: {}
        }
    });
};

export {
    INIT_TAGS,
    initTagsAction
}