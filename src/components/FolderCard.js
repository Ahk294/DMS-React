import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FolderCard = ({ persona }) => {
  return (
    <Card className="text-center m-4">
      <Card.Header className="bg-dark text-white icon-flex">
        <i className="fs-5 fa fa-folder" aria-hidden="true"></i>
        {persona === "Manager" ? (
          <>
            <Link to="#download">
              <i class="fas fa-download fs-5"></i>
            </Link>
          </>
        ) : persona === "User" ? (
          <>
            <Link to="#share">
              <i class="fas fa-share-alt fs-5"></i>
            </Link>
            <Link to="#download">
              <i class="fas fa-download fs-5"></i>
            </Link>
          </>
        ) : (
          ""
        )}
      </Card.Header>
      <Link to="#">
        <Card.Body>
          <Card.Title>Folder Name</Card.Title>
          <Card.Text>Folder Info</Card.Text>
        </Card.Body>
      </Link>
      <Card.Footer className="text-white bg-secondary">Author Name</Card.Footer>
    </Card>
  );
};

export default FolderCard;
