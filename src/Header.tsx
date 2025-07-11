import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>Flowers</Title>
      </TitleWrapper>
      <Contacts>
        <h4 style={{ marginBottom: '5px' }}>Tbilisi</h4>
        <h4 style={{ marginTop: '5px' }}>+9955555555</h4>
      </Contacts>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: auto;
  max-height: 300px;
  padding: 1rem;
  border-bottom: 1px solid rgba(140, 140, 140, 0.5);
`
const TitleWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
`
const Title = styled.h1`
  font-size: 4rem;
  color: rgba(147, 113, 142, 0.5);
`

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: space-between;
`
