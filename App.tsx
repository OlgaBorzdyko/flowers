import styled from 'styled-components'

import Header from './src/Header'
import Main from './src/Main'

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  )
}
export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`
