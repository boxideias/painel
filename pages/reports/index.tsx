import useSWR from 'swr'

const fetcher = (url:any) => fetch(url).then((res) => res.json())

export interface ReportProps {
  id:number,
  client: string,
  date: string,
  title: string,
  pdf_url: string,
  dashboard_url: string
}

export default function Index() {
  const { data, error } = useSWR('/api/reports', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((r:ReportProps) => (
        <div key={r.id}>
            <h1>{r.client}</h1>
            <p> {r.title} </p>
        </div>
      ))}
    </ul>
  )
}