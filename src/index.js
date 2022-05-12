import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; 
import {Provider} from 'react-redux'
import App from './App';
import './index.css'
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers/index'
import Favorites from './components/Favorites'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import rootReducer from './reducers/index';

const persistConfig ={
  key: 'root', 
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/favs" element={<Favorites />}/>

          {/* <Route path="/products" element={</>}/> */}
          
        </Routes>
      </BaseLayout>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

