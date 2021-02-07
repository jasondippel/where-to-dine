// import { Layout } from 'antd'
import styled from 'styled-components'
import { AccountMenu } from 'components'

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  margin: 24px;
`

const SiteHeader = () => (
  <Header>
    <AccountMenu />
  </Header>
)

export default SiteHeader
