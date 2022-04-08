import useSWR from 'swr'

const fetcher = (url:any) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/reports', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => (
        <div key={i}>
            {p.name}
        </div>
      ))}
    </ul>
  )
}