import React from "react";
import logo from "../images/logo.png";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ persona }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to={
              persona === "TA"
                ? `/dashboardta`
                : persona === "Manager"
                ? `/dashboardmanager`
                : `/dashboarduser`
            }
          >
            <img
              alt=""
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex">
              <FormControl
                style={{ marginRight: "2rem" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Nav>
          <Nav>
            {persona === "TA" ? (
              <>
                <Link to="/newproject">
                  {/* <!-- link to create new project page --> */}
                  <i
                    style={{ fontSize: "3rem", paddingRight: "1rem" }}
                    className="fas fa-plus options"
                  ></i>
                </Link>
                <Link to="/settingsTA/personalinfo">
                  {/* <!-- link to personal info settings page --> */}
                  <i
                    style={{ fontSize: "3rem", paddingRight: "1rem" }}
                    className="fas fa-cog options"
                  ></i>
                </Link>
                <Link to="/">
                  {/* <!-- sign out button --> */}
                  <i
                    style={{ fontSize: "3rem" }}
                    className="fas fa-sign-out-alt log-out"
                  ></i>
                </Link>
              </>
            ) : persona === "Manager" ? (
              <>
                <Link to="#addFolder">
                  {/* <!-- link to add new folder from file explorer --> */}
                  <i
                    style={{ fontSize: "3rem", paddingRight: "1rem" }}
                    className="fas fa-folder-plus options"
                  ></i>
                </Link>
                <Link to="#addFile">
                  {/* <!-- link to add new file from file explorer  --> */}
                  <i
                    style={{ fontSize: "3rem", paddingRight: "1rem" }}
                    className="fas fa-file-upload options"
                  ></i>
                </Link>
                <Link to="/settingsManager/personalinfo">
                  {/* <!-- settings  --> */}
                  <i
                    style={{ fontSize: "3rem", paddingRight: "1rem" }}
                    className="fas fa-cog options"
                  ></i>
                </Link>
                <Link to="/">
                  {/* <!-- sign out button --> */}
                  <i
                    style={{ fontSize: "3rem" }}
                    className="fas fa-sign-out-alt log-out"
                  ></i>
                </Link>
              </>
            ) : persona === "User" ? (
              <>
                <Link to="#addFolder">
                  {/* <!-- link to add new folder from file explorer --> */}
                  <i
                    style={{ fontSize: "3rem", paddingRight: "1rem" }}
                    className="fas fa-folder-plus options"
                  ></i>
                </Link>
                <Link to="#addFile">
                  {/* <!-- link to add new file from file explorer  --> */}
                  <i
                    style={{ fontSize: "3rem", paddingRight: "1rem" }}
                    className="fas fa-file-upload options"
                  ></i>
                </Link>
                <Link to="/settingsUser/personalinfo">
                  {/* <!-- settings  --> */}
                  <i
                    style={{ fontSize: "3rem", paddingRight: "1rem" }}
                    className="fas fa-cog options"
                  ></i>
                </Link>
                <Link to="/">
                  {/* <!-- sign out button --> */}
                  <i
                    style={{ fontSize: "3rem" }}
                    className="fas fa-sign-out-alt log-out"
                  ></i>
                </Link>
              </>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// {
//   "name": "frontend",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@testing-library/jest-dom": "^5.14.1",
//     "@testing-library/react": "^11.2.7",
//     "@testing-library/user-event": "^12.8.3",
//     "bootstrap": "^5.1.0",
//     "react": "^17.0.2",
//     "react-bootstrap": "^2.0.0-beta.6",
//     "react-dom": "^17.0.2",
//     "react-router": "^5.2.1",
//     "react-router-bootstrap": "^0.25.0",
//     "react-router-dom": "^5.2.1",
//     "react-scripts": "4.0.3",
//     "web-vitals": "^1.1.2"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }
