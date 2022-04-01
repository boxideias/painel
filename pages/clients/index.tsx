import type { NextPage } from 'next'
import styled from 'styled-components'

export const Dashboard = styled.div`
    height: 100vh;
    margin-bottom: 10px;
`

export const AnaylsisStyle = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background: #fefefe;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  box-shadow: 0 2px 3px 0 #c5c5c5;
`

const Clients: NextPage = () => {
  return (
    <>
      <Dashboard>
        <iframe
          title="hypera_dashboard_daily"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/reportEmbed?reportId=0f6f896e-9456-4715-863d-e19986fc50a5&autoAuth=true&ctid=d6419d1c-cd2e-4780-a648-3b13d18c79b9&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1iLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
          frameBorder="0"
          data-allowFullScreen="true"
          className='rounded'
        />
      </Dashboard>

      <AnaylsisStyle>
        <h4>Analise: Março 2022</h4>
         <h5>Meta ADS</h5>
        <p>
        Dolor veniam aliquip laboris minim. Dolore voluptate anim anim dolor veniam adipisicing culpa aliqua officia et consequat ullamco do. Consectetur id cupidatat sit esse aute culpa proident excepteur et.
        </p>
        <h5>Google ADS</h5>
        <p>
        Veniam qui ex sint amet ad exercitation. Occaecat velit adipisicing et officia minim officia voluptate quis aliqua culpa irure sunt labore mollit. Sunt ut adipisicing aliqua eiusmod sint ex. Nostrud dolor labore veniam exercitation excepteur nulla proident dolore. Veniam ea qui magna proident veniam amet nostrud ullamco reprehenderit in consectetur. Do elit culpa labore culpa est ipsum eiusmod mollit sint velit est.
        </p>
        <h5>Google Analytics</h5>
        <p>
        Nulla duis nisi cupidatat nisi anim cillum. Nulla esse elit ut occaecat cupidatat exercitation do. Aute enim minim adipisicing do ad esse quis fugiat minim enim cillum. Qui aliquip nulla id Lorem quis do occaecat in. Irure excepteur elit dolor enim elit. Esse minim anim labore irure nulla. Exercitation esse commodo sint id non nostrud ex magna id enim anim.
        </p>
        <h5>Conclusão</h5>
        <p>
        Nulla duis nisi cupidatat nisi anim cillum. Nulla esse elit ut occaecat cupidatat exercitation do. Aute enim minim adipisicing do ad esse quis fugiat minim enim cillum. Qui aliquip nulla id Lorem quis do occaecat in. Irure excepteur elit dolor enim elit. Esse minim anim labore irure nulla. Exercitation esse commodo sint id non nostrud ex magna id enim anim.
        </p>
      </AnaylsisStyle>
    </>
  )
}

export default Clients