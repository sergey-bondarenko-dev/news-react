import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BaseLayout from './layouts/BaseLayout.tsx'
import { ThemeProvider } from '../shared/theme'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './model/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
