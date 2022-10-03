import { translate } from "../../utils"

import "../../styles/components/sections/Development.scss"

import iconWeb from "../../assets/icon-web-design.png"
import iconShopping from "../../assets/icon-shopping.png"
import iconRealState from "../../assets/icon-real-state.png"

export default function DevelopmentSection() {
  return (
    <section className="development pt-5 pb-5">
      <div className="container">
        <div className="development__head">
          <h2 className="display-6 text-center mb-3">
            { translate('dev_head_title') }
          </h2>

          <p className="m-0 text-center">
            { translate('dev_head_text') }
          </p>
        </div>

        <ul className="development__featured row justify-content-evenly mt-5 mb-5 pt-4">
          <li className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center text-md-start">
            <figure className="d-block mb-4">
              <img src={iconWeb} alt="web design" height={100} />
            </figure>

            <h5>{ translate('dev_webs_title') }</h5>

            <p>{ translate('dev_webs_text') }</p>
          </li>

          <li className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center text-md-start">
            <figure className="d-block mb-4">
              <img src={iconShopping} alt="web design" height={100} />
            </figure>

            <h5>{ translate('dev_stores_title') }</h5>
            
            <p>{ translate('dev_stores_text') }</p>
          </li>

          <li className="col-12 col-md-6 col-lg-3 text-center text-md-start">
            <figure className="d-block mb-4">
              <img src={iconRealState} alt="web real state" height={100} />
            </figure>

            <h5>{ translate('dev_real_state_title') }</h5>
            
            <p>{ translate('dev_real_state_text') }</p>
          </li>
        </ul>

        <p className="text-center m-0">
          { translate('dev_last_text') }
        </p>
      </div>
    </section>
  )
}
