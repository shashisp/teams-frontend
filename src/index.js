import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from './components/App';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/users/new" component={NewUser} />
          <Route path="/user/edit/:id" component={EditUser} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);