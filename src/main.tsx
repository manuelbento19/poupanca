import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalTheme } from './themes/Global'
import Dashboard from './pages/Dashboard'
import { DespesasProvider } from './context/Provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalTheme/>
    <DespesasProvider>
      <Dashboard/> 
    </DespesasProvider>
  </React.StrictMode>,
)
