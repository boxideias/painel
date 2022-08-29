import Nav from './nav'
import CustomHead from './CustomHead'
import styled from 'styled-components'

const LayoutStyled = styled.div`
  background: #fff;
  padding-top: 2vh;
  padding-bottom: 2vh;
  min-height: 92vh;
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