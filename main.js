import React    from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers }              from 'redux';
import { Provider }                                  from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer }       from 'react-router-redux';
/* App对应总容器 */
/* 每一项对应一个页面 */
import App           from './containers/app';
import PageIndex     from './containers/page_index';
import PageDirectory from './containers/page_directory';
import PagePaper     from './containers/page_paper';
import PageNewPaper  from './containers/page_new_paper';
/* 汇总成一个reducer */
import appReducer from './reducers';
/* 引入css样式 */
require('./static/font-awesome/css/font-awesome.min.css');
require('./static/bootstrap/css/bootstrap.min.css');
require('./static/bootstrap/css/bootstrap-theme.min.css');
require('./static/css/common.css');
require('./static/css/customer.css');

const store = createStore(
    combineReducers({
        appReducer,
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);

const appDom  = document.getElementById('app');

var render = () => {
    ReactDOM.render((
        <Provider store = { store }>
            <Router history = { history }>
                <Route path = "/" component = { App }>
                    <IndexRoute component = { PageIndex }/>
                    <Route path = "index" component = { PageIndex }/>
                    <Route path = "directory" component = { PageDirectory }/>
                    <Route path = "paperId=*" component = { PagePaper }/>
                    <Route path = "newPaper" component = { PageNewPaper }/>
                </Route>
            </Router>
        </Provider>
        ), appDom
    );
};

render();
store.subscribe(render);