import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { FirebaseContext } from './context/Firebase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebase,FieldValue}}>
    <App />
  </FirebaseContext.Provider>
    
);


