import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ԱՅՍ ԵՐԿՈՒ ՏՈՂԸ ՊԵՏՔ Է ԱՆՊԱՅՄԱՆ ԼԻՆԵՆ
import { Provider } from 'react-redux'
import { store } from './app/store.js' // Ստուգիր, որ ճանապարհը ճիշտ լինի

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Կայքը պետք է փաթաթված լինի Provider-ով */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)