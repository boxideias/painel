import { Container } from './style'

export interface DashboardProps{
    name: string,
    dashboard_url: string
}

export default function Dashboard( props:DashboardProps ) {
  return (
    <Container>
        <iframe
          title={props.name}
          src={props.dashboard_url}
          data-allowFullScreen={true}
        />
    </Container>
  )
}
