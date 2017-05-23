import $ from 'jquery';

import common_dataDeepCopy from '../modules/common_data_deep_copy';

var loadingAllFunc = (originState, action) => {
    var newState = Object.assign ? Object.assign({}, originState) : common_dataDeepCopy(originState);

    /* 隐藏整个页面内容 */
    $('#bodyContainer').addClass('hidden');
    $('#loading').removeClass('hidden');

    return newState;
};

export default loadingAllFunc;