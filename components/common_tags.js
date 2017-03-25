import { connect } from 'react-redux';

import UI_commonTags from './ui_common_tags';

import { initTagsAction }            from '../actions';
import { initDirectoryFilterAction } from '../actions';

var mapStateToProps = (state) => {
    var tags = state.appReducer.tags ? state.appReducer.tags : [];
    
    return ({
        tags: tags
    })
};

var mapDispatchToProps = (dispatch) => {
    return ({
        initTags           : () => dispatch(initTagsAction()),
        initDirectoryFilter: (keyword, keywordType) => dispatch(initDirectoryFilterAction(keyword, keywordType))
    });
};

const CommonTags = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(UI_commonTags);

export default CommonTags;