var common_getDomain = () => {
    var domain = 'http://' + document.URL.split('/')[2];

    return domain;
};

export default common_getDomain;