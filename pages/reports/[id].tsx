import { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR from 'swr'
import Link from 'next/link'
import Dashboard from '../../components/dashboard'

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

export interface ReportProps{
  type: string,
  date_started: string,
  date_ended: string,
  report_url: string,
}

export default function Report() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/reports/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Carregando...</div>

  return (
    <>
      <Dashboard
        name={data.name} 
        dashboard_url={data.dashboard_url}
      />

      <AnalysisStyled>
        <h1> Análise </h1>
        <ul>
        {data.reports.map((r:ReportProps, index:number) => (
        <li key={index}>
          <span> {(r.type).charAt(0).toUpperCase() + (r.type).slice(1)} ({r.date_started} - {r.date_ended}): </span>
          <Link href={`/pdf/${r.report_url}`}>
            <a target='_blank'>Acesse o PDF</a>
          </Link>
        </li>
        ))}
        </ul>
      </AnalysisStyled>
    </>
  )
}

const fetcher = async (url:string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}