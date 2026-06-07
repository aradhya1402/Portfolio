import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import AWSIcon from "react-aws-icons/dist/aws/logo/AWS";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJenkins,
  SiGit,
  SiFigma,
  SiDocker,
  SiMicrosoftazure,
  SiAzuredevops,
  SiGithubactions,
  SiJira,
  SiIntellijidea,
  SiBitbucket,
} from "react-icons/si";

function ToolIcon({ icon: Icon, label }) {
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

function AwsToolIcon() {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="tooltip-aws">AWS</Tooltip>}
    >
      <Col xs={4} md={2} className="tech-icons">
        <AWSIcon />
      </Col>
    </OverlayTrigger>
  );
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <ToolIcon icon={SiVisualstudiocode} label="VS Code" />
      <ToolIcon icon={SiIntellijidea}     label="IntelliJ IDEA" />
      <AwsToolIcon />
      <ToolIcon icon={SiMicrosoftazure}   label="Azure" />
      <ToolIcon icon={SiDocker}           label="Docker" />
      <ToolIcon icon={SiGit}              label="Git" />
      <ToolIcon icon={SiGithubactions}    label="GitHub Actions" />
      <ToolIcon icon={SiAzuredevops}      label="Azure DevOps" />
      <ToolIcon icon={SiJenkins}          label="Jenkins" />
      <ToolIcon icon={SiJira}             label="Jira" />
      <ToolIcon icon={SiBitbucket}        label="Bitbucket" />
      <ToolIcon icon={SiPostman}          label="Postman" />
      <ToolIcon icon={SiFigma}            label="Figma" />
    </Row>
  );
}

export default Toolstack;
