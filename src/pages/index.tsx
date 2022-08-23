import { Route, Routes } from 'react-router-dom'

import { Login } from './Login'
import { OrderList } from './OrderList'
import { Confirm } from './Confirm'
import { DefaultLayout } from '@components'

const App = () => (
  <DefaultLayout>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="list" element={<OrderList />} />
      <Route path="confirm/:orderId" element={<Confirm />} />
    </Routes>
  </DefaultLayout>
)

export default App
