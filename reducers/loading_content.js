import $ from 'jquery';

var loadingContentFunc = (originState, action) => {
    var newState = Object.assign({}, originState);

    /* 隐藏整个页面内容 */
    $('#paperContent').addClass('hidden');
    $('#loading').removeClass('hidden');

    return newState;
};

export default loadingContentFunc;