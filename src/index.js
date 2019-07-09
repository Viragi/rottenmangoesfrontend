import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer';
import * as serviceWorker from './serviceWorker';
/*const actionLogger= store => next => action =>{
    console.log("Action to be  performed:",action);
    let result = next(action);
    console.log("after action",result, store.getState());
    return result;
}*/

const store = createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
