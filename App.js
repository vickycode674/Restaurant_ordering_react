import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Orders from './Orders'
import Notfound from './Notfound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="*" element={<Notfound/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
