import { Routes, Route } from 'react-router-dom'

import LoginPage from './LoginPage'
import ManagePage from './ManagePage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="manage" element={<ManagePage />} />
    </Routes>
  )
}

export default App
