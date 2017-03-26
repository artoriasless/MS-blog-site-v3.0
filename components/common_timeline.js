import { connect } from 'react-redux';

import UI_commonTimeline from './ui_common_timeline';

import { initTimelineAction }        from '../actions';
import { initDirectoryFilterAction } from '../actions';

var mapStateToProps = (state) => {
    var timeline = state.appReducer.timeline ? state.appReducer.timeline : [];
    
    return ({
        timeline: timeline
    });
};

var mapDispatchToProps = (dispatch) => {
    return ({
        initTimeline       : () => dispatch(initTimelineAction()),
        initDirectoryFilter: (keyword, keywordType) => dispatch(initDirectoryFilterAction(keyword, keywordType))
    });
};

const CommonTimeline = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(UI_commonTimeline);

export default CommonTimeline;