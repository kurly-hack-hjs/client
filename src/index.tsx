import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import '@styles/_reset.scss'
import '@styles/_global.scss'
import { worker } from './mocks/worker'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
