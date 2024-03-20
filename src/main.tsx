import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Views/Landing.tsx'

import { Model as SelectionModel } from './Models/ReccurencePattern/Selection.ts'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        {App(new SelectionModel())}
  </React.StrictMode>
)
