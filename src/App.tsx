import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Community from './components/Community'
import Team from './components/Team'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import QuizPage from './components/Quiz/QuizPage'
import Footer from './components/Footer'
import { ScrollToTop } from './components/ui/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}