import { actionTypes } from '../actions';
import getTags         from './get_tags';
import getLatest       from './get_latest';
import getTimeline     from './get_timeline';
import getDirectory    from './get_directory';
import getPaper        from './get_paper';

var appReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_TAGS:
            return getTags(state, action);
        
        case actionTypes.GET_LATEST:
            return getLatest(state, action);
        
        case actionTypes.GET_TIMELINE:
            return getTimeline(state, action);
        
        case actionTypes.GET_DIRECTORY:
            return getDirectory(state, action);
        
        case actionTypes.GET_PAPER:
            return getPaper(state, action);
        
        default:
            return state;
    }
};

export default appReducer;
/* 原本还预想用redux来搭配使用的，好像和路由冲突了，没辙了，暂时先把redux放置一边了 */
/*
    data struct:
        {
            tags: [
                {
                    tagName    : 'tag name',
                    paperCount : 2,
                    keyword    : 'tag name',  // same as tagName
                    keywordType: 'tag'
                }, 
                {...}
            ],
            latest: [
                {
                    latestName: 'paper title',
                    latestDate: '2011-11-11',
                    paperId   : '3'
                },
                {...}
            ],
            timeline: [
                {
                    timelineName: '2011-11',
                    paperCount  : 2,
                    keyword     : '2011-11',    // same as timelineName
                    keywordType : 'timeline'
                }, 
                {...}
            ], 
            directory: [
                {
                    paperId      : 2
                    paperTitle   : 'paper title',
                    paperDate    : '2011-11-11',
                    paperTags    : 'paper tags',
                    paperOverview: 'paper overview ...'
                }, 
                {...}
            ],
            currentPaper: {
                paperId       : 2,
                paperTitle    : 'paper title',
                paperDate     : '2011-11-11',
                paperTags     : 'paper tags',
                paperContent  : 'paper content ...',
                prevPaperId   : 1, 
                prevPaperTitle: 'paper title',
                nextPaperId   : '',
                nextPaperTitle: ''
            }
        }
*/
