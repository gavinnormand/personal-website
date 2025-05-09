import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Experiences from './pages/experiences'
import Skills from './pages/skills'
import Nav from './components/nav'
import Footer from './components/footer'
import Photos from './pages/photos'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
