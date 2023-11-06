import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GalleryContentProvider from './contexts/GalleryContentProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GalleryContentProvider>
      <App />
    </GalleryContentProvider>
  </React.StrictMode>,
)
