import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layouts/Main/Main'
import AppRouter from './router'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main 
    children={<AppRouter />}
    />
  </React.StrictMode>,
)
