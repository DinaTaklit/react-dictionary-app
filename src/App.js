import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import Meanings from "./components/Meanings/Meanings";
import ModeSwitcher from "./components/ModeSwitcher/ModeSwitcher";

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
        <ModeSwitcher/>
        <Header/>
        <Meanings/>
      </Container>
    </main>

  );
}

export default App;
