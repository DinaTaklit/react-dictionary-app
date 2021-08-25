import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";

function App() {
  return (
    <main 
      style={{
        backgroundColor:'#282c34',
        color:'white'    
      }}
    >
      <Container
        maxWidth="md" 
        id="appContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Header/>
      </Container>
    </main>

  );
}

export default App;
