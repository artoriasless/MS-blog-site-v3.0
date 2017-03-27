import { connect } from 'react-redux';

import UI_directoryItem from './ui_directory_item';

import { initPaperAction }     from '../actions';

import $ from 'jquery';

import common_getDomain from '../modules/common_get_domain';

var mapStateToProps = (state) => {
    var directory  = state.appReducer.directoryFilter ? state.appReducer.directoryFilter : [];
    
    return ({
        directory: directory
    });
};

var mapDispatchToProps = (dispatch) => {
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

    return ({
        initPaper: (currentPaperId) => dispatch(ajaxInitPaper(currentPaperId))
    });
};

const DirectoryFilterItemList = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(UI_directoryItem);

export default DirectoryFilterItemList;