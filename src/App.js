import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import Meanings from "./components/Meanings/Meanings";
import ModeSwitcher from "./components/ModeSwitcher/ModeSwitcher";
import { useGlobalContext } from "./context";

function App() {

  const {darkMode} = useGlobalContext()

  return (
    <main 
      style={{
        backgroundColor: darkMode ? '#282c34' : '#fff',
        color: darkMode ? '#fff' : '#000',
        transition: 'all 0.5s linear'  
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
