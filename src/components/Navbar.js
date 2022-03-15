import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'
import Index from '../pages/Index'
import Author from '../pages/Author'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
const navbar = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand>
                My Blogs
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                  HomePage
                  </Nav.Link>
                  <Nav.Link as={Link} to="/home">
                    PostPage
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/post/:id" element={<PostPage />}></Route>
            <Route path="/author/:id" element={<Author />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };
export default navbar