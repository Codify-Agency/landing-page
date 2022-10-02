import { useState } from 'react'
import { translate } from '../utils'

import "../styles/components/Navbar.scss"

export default function Navbar() {
  const [ showMenu, setShowMenu ] = useState(false);
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
      <div className="burger" onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <span
        className={`close-menu ${showMenu ? 'show' : ''}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        &#10005;
      </span>

      <ul className={`list-unstyled menu m-0 p-0 d-md-flex flex-wrap align-items-center gap-4 justify-content-center justify-content-md-end ${showMenu ? 'show' : ''}`}>
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