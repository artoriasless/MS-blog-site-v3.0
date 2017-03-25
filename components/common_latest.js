import { connect } from 'react-redux';

import UI_commonLatest from './ui_common_latest';

import { initLatestAction } from '../actions';
import { initPaperAction }  from '../actions';

var mapStateToProps = (state) => {
    var latest = state.appReducer.latest ? state.appReducer.latest : [];
    
    return ({
        latest: latest
    })
};

var mapDispatchToProps = (dispatch) => {
    return ({
        initLatest: () => dispatch(initLatestAction()),
        initPaper : (currentPaperId) => dispatch(initPaperAction(currentPaperId))
    });
};

const CommonLatest = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(UI_commonLatest);

export default CommonLatest;