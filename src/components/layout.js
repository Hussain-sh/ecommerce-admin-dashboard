import Navbar from './Navbar'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`

const Main = styled.main`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
`

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Sidebar />
      <ContentWrapper>
        <Navbar />
        <Main>{children}</Main>
      </ContentWrapper>
    </LayoutWrapper>
  )
}
