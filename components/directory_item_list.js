import { connect } from 'react-redux';

import UI_directoryItem from './ui_directory_item';

import { initDirectoryAction } from '../actions';
import { initPaperAction }     from '../actions';

import $ from 'jquery';

import common_getDomain from '../modules/common_get_domain';

var mapStateToProps = (state) => {
    var directory  = state.appReducer.directory ? state.appReducer.directory : [];
    
    return ({
        directory: directory
    });
};

var mapDispatchToProps = (dispatch) => {
    var ajaxInitDirectory = () => (dispatch) => {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getDirectory.node';

        return (
            $.post(requestUrl, function(data) {
                dispatch(initDirectoryAction(data));
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

    return ({
        initDirectory: () => dispatch(ajaxInitDirectory()),
        initPaper    : (currentPaperId) => dispatch(ajaxInitPaper(currentPaperId))
    });
};

const DirectoryItemList = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(UI_directoryItem);

export default DirectoryItemList;