import { translate } from "../utils"

import "../styles/components/Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content bg-dark text-light pt-5 pb-5 pt-md-4 pb-md-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <piture className="logo">
                <img src="/logo-white.webp" alt="Codify" height={50} />
              </piture>
              
              <p className="mt-3 pe-2">
                Somos una agencia 100% digital que ofrece servicios de consultoría, desarrollo web-móvil y servidores dedicados de alta capacidad.
              </p>

              <a href="#talk" className="btn btn-sm btn-light">
                <i className="fab fa-whatsapp me-1"></i>
                { translate('lets_talk') }
              </a>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <h4 className="mb-3">Our Services</h4>

              <ul className="ps-3">
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Web Design</li>
                <li>SSD dedicated servers</li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <h4 className="mb-3">Stay tuned</h4>

              <ul className="list-unstyled p-0 d-flex gap-4 footer__social-list">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener" className="text-light">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener" className="text-light">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener" className="text-light">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>

              <p className="m-0">
                <small>
                  We also provide support through our social networks. Follow us.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copy pt-2 pb-2 text-center">
        <p className="m-0">
          <small>
            2022 &copy; Codify Agency
          </small>
        </p>
      </div>
    </footer>
  )
}
