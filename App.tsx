import styled from 'styled-components'

import Main from './src/Main'

const App = () => {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  )
}
export default App

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`
