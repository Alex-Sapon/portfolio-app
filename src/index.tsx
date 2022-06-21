import ReactDOM from 'react-dom/client';
import {App} from './components/app/App';
import {BrowserRouter} from 'react-router-dom';
import {Global} from './styles/global';
import { Provider } from 'react-redux';
import { store } from './components/app/store';

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
    <BrowserRouter>
        <Global/>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)