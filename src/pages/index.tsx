import { Route, Routes } from 'react-router-dom'

import { Login } from './Login'
import { OrderList } from './OrderList'
import { Confirm } from './Confirm'
import { DefaultLayout } from '@components'
import { ConfirmFail } from './ConfirmFail'

const App = () => (
  <DefaultLayout>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="list" element={<OrderList />} />
      <Route path="confirm/:orderId" element={<Confirm />} />
      <Route path="fail/:orderId" element={<ConfirmFail />} />
    </Routes>
  </DefaultLayout>
)

export default App
