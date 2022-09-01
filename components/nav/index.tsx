import Link from 'next/link'
import {CstNav} from './style'

function Nav() {
  return (
    <CstNav>
      <div className="container">
        <Link href='/'>
          <a className="navbar-brand">
            <img 
              src="/img/icon_boxideias.png" 
              alt="Box Ideias - Marketing" 
            />
          </a>
        </Link>
      </div>
    </CstNav>
  )
}

export default Nav