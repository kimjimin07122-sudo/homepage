import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import { LanguageProvider } from './lang/LanguageProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollReveal from './components/ScrollReveal'

import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Publications from './pages/Publications'
import Professor from './pages/Professor'
import Team from './pages/Team'
import News from './pages/News'
import Photo from './pages/Photo'
import Contact from './pages/Contact'
import Join from './pages/Join'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <ScrollToTop />
        <ScrollReveal />
        <Navbar />

        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/people" element={<Navigate to="/people/professor" replace />} />
            <Route path="/people/professor" element={<Professor />} />
            <Route path="/people/team" element={<Team />} />
            <Route path="/news" element={<News />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
