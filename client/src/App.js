import { Layout } from 'antd'
import styled from 'styled-components'
import { SiteHeader } from 'components'
import Routes from './Routes'

const Root = styled(Layout)`
  min-height: 100vh;
`

const App = () => (
  <Root id="app">
    <SiteHeader />
    <Routes />
  </Root>
)

export default App
