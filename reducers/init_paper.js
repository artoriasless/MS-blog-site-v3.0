var initPaperFunc = (originState = {}, action) => {
    var newState = Object.assign({}, originState),
        paper    = {
            paperTitle    : 'test paper title',
            paperDate     : '2011-11-11',
            paperTag      : 'test',
            paperContent  : '<strong>【Preface】</strong><p>test paper content.........</p><div class="code-container"><code><pre>$thisTest.animate({marginLeft:\'0em\'});</pre><pre>$thisTest.animate({marginLeft:\'-6em\'});</pre></code></div>',
            currentPaperId: action.payload.jsonData.currentPaperId,
            prevPaper   : {
                id   : '0',
                title: 'test prev paper title'
            },
            nextPaper: {
                id   : '2',
                title: 'test next paper title'
            }
        };

    delete newState.paper;
    newState.paper = paper;

    return newState;
};

export default initPaperFunc;