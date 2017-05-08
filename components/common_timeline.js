import { connect } from 'react-redux';
import $           from 'jquery';

import UI_commonTimeline             from './ui_common_timeline';
import { loadingAction }             from '../actions';
import { initTimelineAction }        from '../actions';
import { initDirectoryFilterAction } from '../actions';

import common_getDomain from '../modules/common_get_domain';

var mapStateToProps = (state) => {
    var timeline = state.appReducer.timeline ? state.appReducer.timeline : [];
    
    return ({
        timeline: timeline
    });
};

var mapDispatchToProps = (dispatch) => {
    var ajaxInitTimeline = () => (dispatch) => {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getTimeline.node';

        /* before get data,show loading animate */
        dispatch(loadingAction());

        return (
            $.post(requestUrl, function(data) {
                dispatch(initTimelineAction(data));
            })
        );
    };

    var ajaxInitDirectoryFilter = (keyword, keywordType) => (dispatch) => {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getDirectoryFilter.node';
        const jsonData   = {
                keyword    : keyword,
                keywordType: keywordType
            };

        /* before get data,show loading animate */
        dispatch(loadingAction());

        return (
            $.post(requestUrl, jsonData, function(data) {
                dispatch(initDirectoryFilterAction(data));
            })
        );
    };

    return ({
        initTimeline       : () => dispatch(ajaxInitTimeline()),
        initDirectoryFilter: (keyword, keywordType) => dispatch(ajaxInitDirectoryFilter(keyword, keywordType))
    });
};

const CommonTimeline = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(UI_commonTimeline);

export default CommonTimeline;