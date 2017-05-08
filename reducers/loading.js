import $ from 'jquery';

var loadingFunc = (originState, action) => {
    var newState = Object.assign({}, originState);

    /* 隐藏整个页面内容 */
    $('#bodyContainer').addClass('hidden');
    $('#loading').removeClass('hidden');

    return newState;
};

export default loadingFunc;