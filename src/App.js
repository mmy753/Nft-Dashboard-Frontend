import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Contents from './components/Contents';
function App() {
  return (
    <Container >
      <Sidebar/>
      <Contents/>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
export default App;
