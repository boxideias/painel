import Nav from './nav'
import CustomHead from './CustomHead'
import styled from 'styled-components'

export const GlobalStyle = styled.div`
    background: #333;
    padding-top: 1vh;
    padding-bottom: 1vh;
  main{
    min-height: 85vh;
  }
`

function Layout( {children}: {children: any} ) {
  return (
    <>
    <CustomHead />
    <Nav />

    <GlobalStyle>
      <main className='container'>
        {children}
      </main>
    </GlobalStyle>
    </>
  )
}

export default Layout