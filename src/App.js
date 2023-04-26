import styled, { ThemeProvider } from "styled-components";
import dark from "./theme/dark";
import light from "./theme/light";

import Card from "./components/card";
import CardContent from "./components/card-content";

const Container = styled.div`
  width: 100vw;
  padding: 100px 0;
  display: flex;
  justify-content: Center;
  background-color: #bdbcbc;
`;

function App() {
  return (
    <Container>
      {[dark, light].map((theme, i) => (
        <ThemeProvider key={i} theme={theme}>
          <Card>
            <CardContent />
          </Card>
        </ThemeProvider>
      ))}
    </Container>
  );
}

export default App;
