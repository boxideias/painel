import {CstNav} from './style'

function Nav() {
  return (
    <CstNav>
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img 
            src="/img/logo_boxideias.png" 
            alt="Box Ideias - Marketing" 
            height="50px" 
          />
        </a>
      </div>
    </CstNav>
  )
}

export default Nav