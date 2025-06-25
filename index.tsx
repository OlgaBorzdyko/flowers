import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

const mocks = async () => {
  if (import.meta.env.DEV) {
    const { browser } = await import('./src/mocks/browser')
    await browser.start({
      onUnhandledRequest: 'bypass'
    })
  }
}
mocks().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
