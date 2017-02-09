import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Root} from './components/Root';
import {Home} from './components/Home';
import {NewItem} from './components/NewItem';

class App extends React.Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route path={'/'} component={Root}>
                <Route path={'/newItem'} component={NewItem}/>
                <Route path={'/home'} component={Home}/>
            </Route>
            <Route path={'/home'} component={Home}/>
        </Router>
    );
  }
}

render(
    <App/>, window.document.getElementById('app'));
