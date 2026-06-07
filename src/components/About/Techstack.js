import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiJava,
  DiAngularSimple,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiCsharp,
  SiDotnet,
  SiTypescript,
  SiDjango,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMicrosoftazure,
  SiVuedotjs,
} from "react-icons/si";

function TechIcon({ icon: Icon, label }) {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}
    >
      <Col xs={4} md={2} className="tech-icons">
        <Icon />
      </Col>
    </OverlayTrigger>
  );
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechIcon icon={SiCsharp}           label="C#" />
      <TechIcon icon={SiDotnet}           label=".NET Core" />
      <TechIcon icon={DiJava}             label="Java" />
      <TechIcon icon={DiJavascript1}      label="JavaScript" />
      <TechIcon icon={SiTypescript}       label="TypeScript" />
      <TechIcon icon={DiPython}           label="Python" />
      <TechIcon icon={DiReact}            label="React" />
      <TechIcon icon={DiAngularSimple}    label="Angular" />
      <TechIcon icon={SiVuedotjs}         label="Vue.js" />
      <TechIcon icon={DiHtml5}            label="HTML5" />
      <TechIcon icon={DiCss3}             label="CSS3 / SCSS" />
      <TechIcon icon={DiMongodb}          label="MongoDB" />
      <TechIcon icon={SiPostgresql}       label="PostgreSQL" />
      <TechIcon icon={SiMicrosoftsqlserver} label="SQL Server" />
      <TechIcon icon={SiMicrosoftazure}   label="Azure" />
      <TechIcon icon={SiDjango}           label="Django" />
    </Row>
  );
}

export default Techstack;
