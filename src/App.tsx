import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/admin-products' element={<AdminView />} />
          <Route path='/waiter-orders' element={<WaiterView />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
