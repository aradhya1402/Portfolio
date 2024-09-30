import React from "react";
import { Col, Row } from "react-bootstrap";
import AWSIcon from 'react-aws-icons/dist/aws/logo/AWS';

import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiJenkins,
  SiGit,
  SiFigma,
  SiApache,
  SiDocker
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <AWSIcon />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiPostman />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiJenkins />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiDocker />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiGit />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiFigma />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiApache />
    </Col>
  </Row>
  );
}

export default Toolstack;
