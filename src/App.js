import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import Meanings from "./components/Meanings/Meanings";

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
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Header/>
        <Meanings/>
      </Container>
    </main>

  );
}

export default App;
