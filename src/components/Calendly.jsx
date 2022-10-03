import { translate } from "../utils"

import "../styles/components/Calendly.scss"

export default function Calendly() {
  return (
    <a href="https://calendly.com/codify-agency/30min" className="btn-calendly btn btn-outline-dark pt-2 pb-2" target="_blank" rel="noopener">
      <i className="fa fa-calendar me-2"></i>
      <span>{ translate('schedule_meeting') }</span>
    </a>
  )
}
