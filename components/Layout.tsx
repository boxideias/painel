import Nav from './nav'
import Footer from './footer'
import CustomHead from './CustomHead'
import styled from 'styled-components'

export const GlobalStyle = styled.main`
  min-height: 85vh;
  margin-top: 1vh;
  margin-bottom: 1vh;
`

function Layout( {children}: {children: any} ) {
  return (
    <>
    <CustomHead />
    <Nav />

    <GlobalStyle className='container'>
      {children}
    </GlobalStyle>

    <Footer />
    </>
  )
}

export default Layout