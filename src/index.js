import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import BaseLayout from './components/BaseLayout';
import cartReducer from './reducers/cartReducer';
import deleteProduct from './actions/deleteProduct';
import Cart from './components/Cart';

const store = createStore(cartReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path ="/app" component={App}></Route>
                    <Route path="/" component={Cart}></Route>
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));