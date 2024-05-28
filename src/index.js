import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from 'react-redux-toastr'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ReduxToastr timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-right"
                    getState={
                        (state) => state.toastr
                    }
                    // This is the default
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick
                />
                <App/>

            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
