import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchDataComp from './components/fetchDataComp.jsx'
import FetchComp from './components/fetchComp.jsx'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">ELBRUS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">JSON</Nav.Link>
          <Nav.Link href="#pricing">SWAPI</Nav.Link>
        </Nav>
      </Navbar>
      <FetchDataComp />
      <FetchComp />
    </div>
  );
}

export default App;
