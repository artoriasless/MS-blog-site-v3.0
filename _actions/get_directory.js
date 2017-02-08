const GET_DIRECTORY = 'GET_DIRECTORY';

var getDirectoryAction = (keyword = '', keywordType = '') => {
    return ({
        type   : GET_DIRECTORY,
        payload: {
            postName   : '/getDirectory',
            keyword    : keyword, 
            keywordType: keywordType
        }
    });
};

export {
    GET_DIRECTORY, 
    getDirectoryAction
};