import { connect } from 'react-redux';

import UI_paperItem from './ui_paper_item';

import { initPaperAction } from '../actions';

var mapStateToProps = (state) => {
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
        paper = state.appReducer.paper ? state.appReducer.paper : defaultPaper;
    
    return ({
        paper: paper
    });
};

var mapDispatchToProps = (dispatch) => {
    return ({
        initPaper: (currentPaperId) => dispatch(initPaperAction(currentPaperId))
    });
};

const PaperItem = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(UI_paperItem);

export default PaperItem;