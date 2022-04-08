import { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR from 'swr'
import Link from 'next/link'

const DashboardStyled = styled.section`
  margin-bottom: 10px;
  iframe{
    width: 100%;
    height: 600px;
    border-radius: 4px;
    border: 0;
  }
`

const AnalysisStyled = styled.section`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  ul{
    margin: 0;
  }

  a{
    text-decoration: none;
  }
`

export default function Person() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/reports/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <DashboardStyled>
        <iframe
          title="hypera_dashboard_daily"
          src={data.dashboard_url}
          data-allowFullScreen="true"
        />
      </DashboardStyled>

      <AnalysisStyled>
        <h1> Análise </h1>
        <ul>
          <li>
            <span>{data.month} {data.year}: </span>
            <Link href={`/pdf/${data.pdf_url}`}>
              <a target='_blank'>Baixe o PDF</a>
            </Link>
          </li>
        </ul>
      </AnalysisStyled>
    </>
  )
}

const fetcher = async (url:any) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}