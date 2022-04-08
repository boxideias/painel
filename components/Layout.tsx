import Nav from './nav'
import CustomHead from './CustomHead'
import styled from 'styled-components'

const LayoutStyled = styled.div`
  background: #333;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  min-height: 90vh;
`

function Layout( {children}: {children: any} ) {
  return (
    <>
    <CustomHead />
    <Nav />

    <LayoutStyled>
      <main className='container'>
        {children}
      </main>
    </LayoutStyled>
    </>
  )
}

export default Layout