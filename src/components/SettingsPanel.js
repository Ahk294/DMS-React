import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const SettingsPanel = ({ persona, pi, org, proj }) => {
  return (
    <Col>
      <Card
        className="bg-dark justify-content-center"
        style={{ width: "25rem", height: "25rem" }}
      >
        <ListGroup variant="flush">
          <Link to={`/settings${persona}/PersonalInfo`} className="m-4">
            <ListGroup.Item
              className={`fs-3 border border-2 rounded-3 bg-dark text-white text-center ${
                pi ? `border-primary` : `border-white`
              }`}
            >
              Personal Info
            </ListGroup.Item>
          </Link>
          {persona === "TA" && (
            <>
              <Link to={`/settings${persona}/organization`} className="m-4">
                <ListGroup.Item
                  className={`fs-3 border border-2 rounded-3 bg-dark text-white text-center ${
                    org ? `border-primary` : `border-white`
                  }`}
                >
                  Organization
                </ListGroup.Item>
              </Link>

              <Link to={`/settings${persona}/projects`} className="m-4">
                <ListGroup.Item
                  className={`fs-3 border border-2 rounded-3 bg-dark text-white text-center ${
                    proj ? `border-primary` : `border-white`
                  }`}
                >
                  Projects
                </ListGroup.Item>
              </Link>
            </>
          )}

          {persona === "Manager" && (
            <Link to={`/settings${persona}/project`} className="m-4">
              <ListGroup.Item
                className={`fs-3 border border-2 rounded-3 bg-dark text-white text-center ${
                  proj ? `border-primary` : `border-white`
                }`}
              >
                Project
              </ListGroup.Item>
            </Link>
          )}
        </ListGroup>
      </Card>
    </Col>
  );
};

export default SettingsPanel;
