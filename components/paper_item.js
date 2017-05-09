import { connect } from 'react-redux';
import $           from 'jquery';

import UI_paperItem             from './ui_paper_item';
import { loadingAllAction }     from '../actions';
import { loadingContentAction } from '../actions';
import { initPaperAction }      from '../actions';
import { initCommentsAction }   from '../actions';

import common_getDomain from '../modules/common_get_domain';

var mapStateToProps = (state, props) => {
    var defaultPaper = {
            paperTitle    : '',
            paperDate     : '',
            paperTag      : '',
            paperContent  : '',
            currentPaperId: '',
            prevPaper   : {
                id   : '',
                title: ''
            },
            nextPaper: {
                id   : '',
                title: ''
            }
        },
        paper;
    
    if (state.appReducer.paperListObj) {
        var currentPaperId = state.appReducer.paperListObj.currentPaperId,
            paperList      = state.appReducer.paperListObj.paperList,
            paperCount     = paperList.length;
        
        if (paperCount == 2) {
                if (paperList[0].id == currentPaperId) {
                    paper = {
                        currentPaperId: currentPaperId,
                        paperTitle    : paperList[0].title,
                        paperDate     : paperList[0].date,
                        paperTag      : (paperList[0].subtag ? (paperList[0].tag + '，' + paperList[0].subtag) : paperList[0].tag),
                        paperContent  : paperList[0].content,
                        prevPaper: {
                            id   : currentPaperId,
                            title: '已经是第一篇了！没有上一篇了！'
                        },
                        nextPaper: {
                            id   : paperList[1].id,
                            title: paperList[1].title
                        }
                    };
                }
                else {
                    paper = {
                        currentPaperId: currentPaperId,
                        paperTitle    : paperList[1].title,
                        paperDate     : paperList[1].date,
                        paperTag      : (paperList[1].subtag ? (paperList[1].tag + '，' + paperList[1].subtag) : paperList[1].tag),
                        paperContent  : paperList[1].content,
                        prevPaper: {
                            id   : paperList[0].id,
                            title: paperList[0].title
                        },
                        nextPaper: {
                            id   : currentPaperId,
                            title: '已经是最后一篇了！没有下一篇了！'
                        }
                    };
                }
            }
            else {
                paper = {
                    currentPaperId: currentPaperId,
                    paperTitle    : paperList[1].title,
                    paperDate     : paperList[1].date,
                    paperTag      : (paperList[1].subtag ? (paperList[1].tag + '，' + paperList[1].subtag) : paperList[1].tag),
                    paperContent  : paperList[1].content,
                    prevPaper: {
                        id   : paperList[0].id,
                        title: paperList[0].title
                    },
                    nextPaper: {
                        id   : paperList[2].id,
                        title: paperList[2].title
                    }
                };
            }
    }
    else {
        paper = defaultPaper;
    }

    return ({
        paper   : paper,
        comments: state.appReducer.comments
    });
};

var mapDispatchToProps = (dispatch, props) => {
    var ajaxInitPaper = (currentPaperId) => (dispatch) => {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getPaper.node';
        const jsonData   = {
                currentPaperId: currentPaperId
            };

        return (
            $.post(requestUrl, jsonData, function(data) {
                dispatch(initPaperAction(currentPaperId, data));
            })
        );
    };

    var ajaxInitComments = (currentPaperId) => (dispatch) => {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getComments.node';
        const jsonData   = {
                paperId: currentPaperId
            };

        return (
            $.post(requestUrl, jsonData, function(data) {
                dispatch(initCommentsAction(data));
            })
        );
    };

    return ({
        loadingAll    : () => dispatch(loadingAllAction()),
        loadingContent: () => dispatch(loadingContentAction()),
        initPaper     : (currentPaperId) => dispatch(ajaxInitPaper(currentPaperId)),
        initComments  : (currentPaperId) => dispatch(ajaxInitComments(currentPaperId))
    });
};

const PaperItem = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(UI_paperItem);

export default PaperItem;