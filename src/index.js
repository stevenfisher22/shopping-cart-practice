import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import BaseLayout from './components/BaseLayout';
import cartReducer from './reducers/cartReducer';
import deleteProduct from './actions/deleteProduct';
import Cart from './components/Cart';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    cartReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path="/" component={Cart} />
                    <Route path ="/app" component={App} />
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));