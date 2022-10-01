import { translate } from '../utils'

import "../styles/components/Navbar.scss"

export default function Navbar() {
  const links = [
    {
      label: translate('home'),
      href: '#top'
    },
    {
      label: translate('development'),
      href: '#dev'
    },
    {
      label: translate('servers'),
      href: '#servers'
    },
    {
      label: translate('lets_talk'),
      href: '#talk'
    }
  ]

  return (
    <nav className="nav-bar">
      <ul className="list-unstyled menu m-0 p-0 d-flex flex-wrap align-items-center gap-4 justify-content-center justify-content-md-end">
        { links.map(link => (
          <li key={`k-${link.href}`}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        )) }
      </ul>
    </nav>
  )
}