import Navbar from './Navbar'
import HeroSection from './sections/Hero'

import "../styles/components/Header.scss"

export default function Header() {
  return (
    <header className="header">
      <div className="topbar pt-3 pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-9 col-md-3">
              <figure>
                <img src="/logo-white.webp" alt="Codify" height={55} />
              </figure>
            </div>
            <div className="col-3 col-md-9">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      <HeroSection />
    </header>
  )
}
