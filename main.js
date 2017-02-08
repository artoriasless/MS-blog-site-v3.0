import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App           from './containers/app';
import IndexPage     from './containers/index_page';
import DirectoryPage from './containers/directory_page';
import PaperPage     from './containers/paper_page';

require('./static/plugins/roundabout/roundabout2.css');
require('./static/css/common.css');
require('./static/css/customer.css');

require('./static/jquery-ui/jquery-ui.min');
require('./static/bootstrap/js/bootstrap.min');
require('./static/plugins/roundabout/jquery.roundabout2');
require('./static/plugins/roundabout/jquery.roundabout-shapes2');
require('./static/plugins/roundabout/jquery.easing');

const appDom = document.getElementById('app');

var render = () => {
    ReactDOM.render((
            <Router history = { browserHistory }>
                <Route path = "/" component = { App }>
                    <IndexRoute component = { IndexPage }/>
                    <Route path = "index" component = { IndexPage } />
                    <Route path = "directory" component = { DirectoryPage } />
                    <Route path = "paperId=*" component = { PaperPage } />
                </Route>
            </Router>
        ), appDom
    );
};

render();