import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {Global} from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
    <BrowserRouter>
        <Global/>
        <App/>
    </BrowserRouter>
)