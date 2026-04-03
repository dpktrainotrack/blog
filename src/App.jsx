
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blogs from './components/Blogs'
function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Blogs />} />
          
      </Routes>

  </>
  )
}

export default App
