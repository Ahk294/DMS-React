import React from "react";
import { Col } from "react-bootstrap";
import DocumentCard from "./DocumentCard";
import FolderCard from "./FolderCard";

const ActivityPanel = ({ persona }) => {
  return (
    <Col md={6} className="m-3 border border-2 border-dark rounded-3 bg-dark">
      <h1 className="display-6 text-center text-white">Activity</h1>
      <div className="mt-5">
        <DocumentCard persona={persona} />
        <FolderCard persona={persona} />
        <DocumentCard persona={persona} />
        <FolderCard persona={persona} />
      </div>
    </Col>
  );
};

export default ActivityPanel;
