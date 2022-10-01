import { translate } from "../../utils"

import "../../styles/components/sections/Hero.scss"

export default function HeroSection() {
  return (
    <section className="hero pt-5 pb-5">
      <div className="container">
        <div className="row text-light">
          <div className="col-12 col-md-6 align-self-start">
            <h1 className="hero__title mb-4">
            { translate('hero_title') }
            </h1>

            <p className="hero__text">
              { translate('hero_text_1') }
            </p>
            <p className="hero__text">
              { translate('hero_text_2') }
            </p>

            <a href="#talk" className="btn btn-light mt-4">
              <i className="fab fa-whatsapp me-1"></i>
              { translate('lets_talk') }
            </a>
          </div>
          <div className="col-12 col-md-6 align-self-end text-end">
            <h5><small>
              { translate('we_wordpress_experts') }
            </small></h5>
          </div>
        </div>
      </div>
    </section>
  )
}
