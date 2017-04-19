import { connect } from 'react-redux';

import UI_commonLatest from './ui_common_latest';

import { initLatestAction }   from '../actions';
import { initPaperAction }    from '../actions';
import { initCommentsAction } from '../actions';

import $ from 'jquery';

import common_getDomain from '../modules/common_get_domain';

var mapStateToProps = (state) => {
    var latest = state.appReducer.latest ? state.appReducer.latest : [];
    
    return ({
        latest: latest
    });
};

var mapDispatchToProps = (dispatch) => {
    var ajaxInitLatest = () => (dispatch) => {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getLatest.node';

        return (
            $.post(requestUrl, function(data) {
                dispatch(initLatestAction(data));
            })
        );
    };

    var ajaxInitPaper = (currentPaperId) => (dispatch) => {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getPaper.node';
        const jsonData = {
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
        const jsonData = {
                paperId: currentPaperId
            };

        return (
            $.post(requestUrl, jsonData, function(data) {
                dispatch(initCommentsAction(data));
            })
        );
    };

    return ({
        initLatest: () => dispatch(ajaxInitLatest()),
        initPaper : (currentPaperId) => dispatch(ajaxInitPaper(currentPaperId)),
        initComments: (currentPaperId) => dispatch(ajaxInitComments(currentPaperId))
    });
};

const CommonLatest = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(UI_commonLatest);

export default CommonLatest;