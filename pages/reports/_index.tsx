import useSWR from 'swr'

const fetcher = (url:any) => fetch(url).then((res) => res.json())

export interface ReportsProps {
  id: string,
  name: string,
  dashboard_url: string,
}

export default function Index() {
  const { data, error } = useSWR('/api/reports', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((r:ReportsProps) => (
        <div key={r.id}>
            <h1>{r.name}</h1>
            <p> {r.dashboard_url} </p>
        </div>
      ))}
    </ul>
  )
}
