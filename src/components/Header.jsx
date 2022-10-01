import Navbar from './NavBar'
import HeroSection from './sections/Hero'

import "../styles/components/Header.scss"

export default function Header() {
  return (
    <header className="header">
      <div className="topbar pt-3 pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <picture>
                <img src="/logo-white.webp" alt="Codify" height={55} />
              </picture>
            </div>
            <div className="col-12 col-md-8">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      <HeroSection />
    </header>
  )
}
