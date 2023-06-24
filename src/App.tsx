
import './App.css';
import Navbar from './components/navbar/Navbar'
import Tabla from './components/products/Tabla'
import TablaEdit from './components/products/TablaEdit'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Navbar />
      
      <br />
      <Routes>
        <Route path="/" element={<Tabla/>} />
        <Route path="/:id" element={<TablaEdit/>} />
        
      </Routes>

    </Router>
  )
}