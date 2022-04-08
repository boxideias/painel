import Nav from './nav'
import CustomHead from './CustomHead'

function Layout( {children}: {children: any} ) {
  return (
    <>
    <CustomHead />
    <Nav />

    <main className='container'>
      {children}
    </main>
    </>
  )
}

export default Layout