import React from "react";
import { Card, Col } from "react-bootstrap";

const TeamPanel = () => {
  return (
    <Col className="m-3 border border-2 border-dark rounded-3 bg-dark">
      <h1 className="display-6 text-center text-white">Team</h1>
      <div className="mt-5">
        <div className="m-4">
          <Card.Header className="bg-secondary text-white">
            Project Team
          </Card.Header>
          <Card body>
            <ul>
              <li>
                Alex (Tenet Admin)
                <ul>
                  <li>
                    Kamal (Manager)
                    <ul>
                      <li>Rohan (User)</li>
                      <li>Rohit (User)</li>
                      <li>Leo (User)</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default TeamPanel;
