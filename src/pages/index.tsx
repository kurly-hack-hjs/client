import { Route, Routes } from 'react-router-dom'

import { Login } from './Login'
import { OrderList } from './OrderList'

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="list" element={<OrderList />} />
    </Routes>
  </div>
)

export default App
