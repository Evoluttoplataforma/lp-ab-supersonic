import { Routes, Route } from 'react-router-dom'
import PbqpH from './pages/PbqpH'
import Iso9001 from './pages/Iso9001'
import Iso27001 from './pages/Iso27001'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PbqpH />} />
      <Route path="/pbqp-h" element={<PbqpH />} />
      <Route path="/iso-9001" element={<Iso9001 />} />
      <Route path="/iso-27001" element={<Iso27001 />} />
    </Routes>
  )
}

export default App
