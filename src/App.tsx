import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Expertise from './components/Expertise'
import Leadership from './components/Leadership'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialBar from './components/SocialBar'
import SectionIndicator from './components/SectionIndicator'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <SocialBar />
      <SectionIndicator />
      <ScrollToTop />
      <main id="main-content" role="main">
        <Hero />

        {/* Divider */}
        <div className="max-w-editorial mx-auto px-6 lg:px-12">
          <div className="section-rule" />
        </div>

        <About />

        <div className="max-w-editorial mx-auto px-6 lg:px-12">
          <div className="section-rule" />
        </div>

        <Experience />

        <div className="max-w-editorial mx-auto px-6 lg:px-12">
          <div className="section-rule" />
        </div>

        <Work />

        <div className="max-w-editorial mx-auto px-6 lg:px-12">
          <div className="section-rule" />
        </div>

        <Expertise />

        <div className="max-w-editorial mx-auto px-6 lg:px-12">
          <div className="section-rule" />
        </div>

        <Leadership />

        <div className="max-w-editorial mx-auto px-6 lg:px-12">
          <div className="section-rule" />
        </div>

        <Writing />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
