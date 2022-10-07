import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './page/About'
import Root from './page/Root'
import Route from './Route'
import Router from './Router'
import Routes from './Routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
)
