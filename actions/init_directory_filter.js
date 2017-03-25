const INIT_DIRECTORY_FILTER = 'INIT_DIRECTORY_FILTER';

var initDirectoryFilterAction = (keyword = '', keywordType = '') => {
    return ({
        type   : INIT_DIRECTORY_FILTER,
        payload: {
            postName: '/getDirectoryFilter.node',
            jsonData: {
                keyword    : keyword,
                keywordType: keywordType
            }
        }
    })
};

export {
    INIT_DIRECTORY_FILTER,
    initDirectoryFilterAction
}