import '@fontsource/montserrat/400.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const mocks = async () => {
  if (import.meta.env.DEV) {
    const { browser } = await import('./mocks/browser')
    await browser.start({
      onUnhandledRequest: 'bypass'
    })
  }
}
mocks().then(() => {
  root.render(
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  )
})
