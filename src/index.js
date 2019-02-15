import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import BaseLayout from './components/BaseLayout';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path ="/" component={App}></Route>
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

