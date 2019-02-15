import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <div>
                Hello World
            </div>
        </BaseLayout>
    </BrowserRouter>
, document.getElementById('root'));

