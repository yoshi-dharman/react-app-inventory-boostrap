//React
import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap';


//Components
import NavbarKu from './components/NavbarKu';
import AllRoute from './components/AllRoute';
import LoginControl from './components/LoginControl';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/my.css';

function App() {
  const [active, setActive] = useState("Home");
  const [button, setButton] = useState("");
  // const [angka, setAngka] = useState(0);

  useEffect(() => {
    setButton(<LoginControl setButton={setButton} active={active} setActive={setActive}/>);
  }, [active])

  return (

    <div>
      <NavbarKu active={active} setActive={setActive} button={button} setButton={setButton}/>
      {/* {active} */}
      <Container className="mt-3">
        <AllRoute setActive={setActive} setButton={setButton}/>
      </Container>

    </div>
      
  );
}

export default App;
