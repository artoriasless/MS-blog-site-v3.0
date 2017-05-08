import { actionTypes }         from '../actions';
import loadingAllFunc          from './loading_all';
import loadingContentFunc      from './loading_content';
import initDirectoryFunc       from './init_directory';
import initDirectoryFilterFunc from './init_directory_filter';
import initPaperFunc           from './init_paper';
import initTagsFunc            from './init_tags';
import initLatestFunc          from './init_latest';
import initTimelineFunc        from './init_timeline';
import initCommentsFunc        from './init_comments';

var appReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.LOADING_ALL:
            return loadingAllFunc(state, action);
        case actionTypes.LOADING_CONTENT:
            return loadingContentFunc(state, action);
        case actionTypes.INIT_DIRECTORY:
            return initDirectoryFunc(state, action);
        case actionTypes.INIT_DIRECTORY_FILTER:
            return initDirectoryFilterFunc(state, action);
        case actionTypes.INIT_PAPER:
            return initPaperFunc(state, action);
        case actionTypes.INIT_TAGS:
            return initTagsFunc(state, action);
        case actionTypes.INIT_LATEST:
            return initLatestFunc(state, action);
        case actionTypes.INIT_TIMELINE:
            return initTimelineFunc(state, action);
        case actionTypes.INIT_COMMENTS:
            return initCommentsFunc(state, action);
        default:
            return state;
    }
};

export default appReducer;