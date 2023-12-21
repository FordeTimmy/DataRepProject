import './App.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Home from './components/home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Create from './components/create';
import Edit from './components/edit';
import Login from './components/login';
import Layout from './components/layout'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout> {/* Wrap all routes with the Layout component */}
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand> {/* Link to the homepage */}
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link> {/* Link to the Home route */}
                <Nav.Link as={Link} to="/create">Create</Nav.Link> {/* Link to the Create route */}
                <Nav.Link as={Link} to="/login">Login</Nav.Link> {/* Link to the Login route */}
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route index element={<Login />} /> {/* Render the Login component on the index route */}
            <Route path="/home" element={<Home />} /> {/* Render the Home component on the /home route */}
            <Route path="/create" element={<Create />} /> {/* Render the Create component on the /create route */}
            <Route path="/edit/:id" element={<Edit />} /> {/* Render the Edit component on the /edit/:id route */}
            <Route path="/login" element={<Login />} /> {/* Render the Login component on the /login route */}
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
