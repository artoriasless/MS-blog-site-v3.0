const GET_TAGS = 'GET_TAGS';

var getTagsAction = () => {
    return ({
        type   : GET_TAGS,
        payload: {
            postName: '/getTags'
        }
    });
};

export {
    GET_TAGS, 
    getTagsAction
};