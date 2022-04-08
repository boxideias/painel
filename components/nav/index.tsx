import Link from 'next/link'
import {CstNav} from './style'

function Nav() {
  return (
    <CstNav>
      <div className="container">
        <Link href='/'>
          <a className="navbar-brand">
            <img 
              src="/img/logo_boxideias.png" 
              alt="Box Ideias - Marketing" 
              height="50px" 
            />
          </a>
        </Link>
      </div>
    </CstNav>
  )
}

export default Nav