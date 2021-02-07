import { rem } from 'polished'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: ${rem('72px')};
  font-weight: 900;
  font-style: italic;
  margin: 48px 120px;
  max-width: 1024px;
  text-align: center;
`

const Home = () => (
  <Root>
    <HeroTitle>Where would you like to dine today?</HeroTitle>
  </Root>
)

export default Home
