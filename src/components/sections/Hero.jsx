import { translate } from "../../utils"

import "../../styles/components/sections/Hero.scss"

export default function HeroSection() {
  return (
    <section className="hero pt-5">
      <div className="container">
        <div className="row text-light">
          <div className="col-12 col-md-7 align-self-start pb-5">
            <h1 className="hero__title mb-4">
            { translate('hero_title') }
            </h1>

            <p className="hero__text">
              { translate('hero_text_1') }
            </p>
            <p className="hero__text">
              { translate('hero_text_2') }
            </p>

            <a href="https://wa.me/573008291060" className="btn btn-light mt-4" target="_blank" rel="noopener">
              <i className="fab fa-whatsapp me-1"></i>
              { translate('lets_talk') }
            </a>
          </div>
          <div className="col-12 col-md-5 align-self-end pb-2 text-end">
            <h5><small>
              { translate('we_wordpress_experts') }
            </small></h5>
          </div>
        </div>
      </div>
    </section>
  )
}
