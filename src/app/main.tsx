import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '../shared/theme'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './model/index.ts'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
