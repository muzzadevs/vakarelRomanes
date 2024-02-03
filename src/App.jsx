import styled from "styled-components";
import ContenedorTraductor from "./ContenedorTraductor";

const CajaApp = styled.div`
  height: 100vh;
  width: 100%;
  background: radial-gradient(circle at center, #5de0e6, #004aad);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <CajaApp>
      <ContenedorTraductor />
    </CajaApp>
  );
}

export default App;
