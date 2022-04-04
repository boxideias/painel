import type { NextPage } from 'next'
import styled from 'styled-components'

export const Dashboard = styled.div`
    height: 100vh;
    margin-bottom: 10px;
`

export const AnaylsisStyle = styled.div`
  margin-bottom: 10px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;

  img{
    margin-bottom: 10px;
    border-radius: 4px;
  }
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
        <h1>Analise: Março 2022</h1>
        <h6>Google ADS</h6>
        <p>
          Março foi um mês de recuperação,  principalmente quando olhamos a segunda quinzena do mês, onde saltamos de um ROI de 0,89 para 1,76. Nos fazendo terminar o mês de março com um ROI positivo de 1,27. Isso representa um crescimento de 22% comparado ao mês anterior.   
        </p>
        
        <article className='d-flex flex-column align-center text-center'>
          <h3>ROI no mês de março</h3>
          <img src="/img/hypera/5.jpg" alt="" className='img-fluid' />
          <small>
            Campanhas de marketing durante o mês de março
          </small>
        </article>

        <b>KPI - 01/03 á 16/03</b>
        <img src="/img/hypera/1.jpg" alt="" className='img-fluid' />
        <b>KPI - 17/03 á 31/03</b>
        <img src="/img/hypera/2.jpg" alt="" className='img-fluid' />
        <p>
          Fora o crescimento no CPC, a segunda quinzena obteve melhores resultados em todos os outros aspectos. Com destaque para <b>queda do CPA de 43%</b> e <b>crescimento no ticket médio de 14%</b>, comparando os dois períodos.
        </p>
        
        <table className='table'>
          <thead>
            <th scope="col">Metrica</th>
            <th scope="col">01/03 - 16/03</th>
            <th scope="col">17/03 - 31/03</th>
          </thead>
          <tbody>
            <tr>
              <th scope='row'> Impressões </th>
              <td>2.721.058</td>
              <td>1.321.662</td>
              
            </tr>
            <tr>
              <th scope='row'> Cliques </th>
              <td>35.417</td>
              <td>22.600</td>
            </tr>
          </tbody>
        </table>

        <p>
          Outro dado interessante é que a segunda quinzena do mês teve <b>48% menos impressões</b> e <b>63% menos cliques</b> do que a primeira quinzena do mês. O que pode apontar que o melhor resultado pode ter ocorrido por outros fatores.
        </p>
        <img src="/img/hypera/3.jpg" alt="" className='img-fluid' />

        <h4>Conclusão</h4>

        <p>
          O mês de março da Hypera no Google ADS apresenta um resultado motivador de recuperação, com as campanhas de marketing entregando um aumento de número de pedidos e no valor do ticket médio, quanto em simultâneo, uma diminuição do CPA. Isso tudo com números de impressões e cliques expressivamente menores de cliques do que a primeira quinzena.
        </p>
        <p>
          Podemos acreditar que os melhores resultados podem estar ligados também a outros fatores, como volta do estoque, melhor experiencia do usuário com site.
        </p>
      </AnaylsisStyle>
    </>
  )
}

export default Clients