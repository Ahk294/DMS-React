import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Container className="text-center">
      <h1 className="display-1">Hello World!</h1>
      <h1 className="display-3">This is the home page</h1>
      <Link to="/register">Register </Link>|<Link to="/login"> Login</Link>
      <br />
      <br />
      <h1 className="display-5">Tenet Admin Pages</h1>
      <Link to="/createorg">Create Organisation </Link>|
      <Link to="/newproject"> Crate New Project </Link>|
      <Link to="/dashboardta"> Dashboard</Link>
      <br />
      <br />
      <h1 className="display-5">Manager Pages</h1>
      <Link to="/manageproject">Manage New Project </Link>|
      <Link to="/dashboardmanager"> Dashboard</Link>
      <br />
      <br />
      <h1 className="display-5">User Page</h1>
      <Link to="/dashboarduser">Dashboard</Link>
    </Container>
  );
};

export default HomeScreen;
