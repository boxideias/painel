import Nav from './nav'
import CustomHead from './CustomHead'
import styled from 'styled-components'

const LayoutStyled = styled.div`
  height: 100vh;
  background: #EAEAEA;
  display: grid;
  place-items: center;
`

function Layout( {children}: {children: any} ) {
  return (
    <>
    <CustomHead />
    <LayoutStyled>
      <main className='container'>
        {children}
      </main>
    </LayoutStyled>
    </>
  )
}

export default Layout