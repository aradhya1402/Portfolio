import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ServiceLinkCard from "./ServiceLinkCard";
import Particle from "../Particle";
import { TbBrain } from "react-icons/tb";
import fitness from "../../Assets/Projects/fitness.png";
import healthcare from "../../Assets/Projects/healthcare.png";
import food from "../../Assets/Projects/food.png";
import currency from "../../Assets/Projects/currency.png";
import streamify from "../../Assets/Projects/steamify.png";
import factoryLogo from "../../Assets/Projects/factoryLogo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects and work I've done across my career.
        </p>

        <Tab.Container defaultActiveKey="servicelink">
          <Nav variant="pills" className="project-tabs">
            <Nav.Item>
              <Nav.Link eventKey="servicelink">ServiceLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="deloitte">Deloitte</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cmu">Carnegie Mellon</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>

            {/* ── ServiceLink ── */}
            <Tab.Pane eventKey="servicelink">
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                <Col md={6} className="project-card">
                  <ServiceLinkCard
                    icon={TbBrain}
                    category="AI & Machine Learning · Document Intelligence"
                    title="AI Feedback Loop: Document Extraction"
                    description="Designed and implemented a closed-loop feedback system for an AI-powered document extraction platform. The platform extracts 100+ title-related fields from legal documents and surfaces confidence scores to users. I built the end-to-end mechanism to capture user corrections, map them against original predictions using a dynamic field-mapping strategy, and feed structured payloads back to AI services, enabling continuous retraining and improvement of confidence scoring models."
                    metrics={["100+ extracted fields", "Closed-loop AI retraining", "Multi-service pipeline"]}
                  />
                </Col>

                <Col md={6} className="project-card">
                  <ServiceLinkCard
                    category="Backend Engineering · C# / .NET Core"
                    title="Distributed Data Processing"
                    description="Designed and implemented distributed backend services to process high-volume external data, ensuring idempotency, schema validation, and fault tolerance across the pipeline. Architected the system to handle failures gracefully and recover without data loss or duplication."
                    metrics={["50% latency reduction", "1.94 to 0.97 days"]}
                  />
                </Col>

                <Col md={6} className="project-card">
                  <ServiceLinkCard
                    category="API Development · REST"
                    title="RESTful API Platform"
                    description="Developed and maintained RESTful APIs consumed by multiple downstream services. Implemented authentication flows and token caching strategies to reduce redundant calls and improve throughput under high concurrency and peak-load scenarios."
                    metrics={["20% API latency reduction"]}
                  />
                </Col>

                <Col md={6} className="project-card">
                  <ServiceLinkCard
                    category="Cloud & Messaging · Azure Service Bus"
                    title="Event-Driven Microservices"
                    description="Built asynchronous, event-driven workflows using Azure Service Bus (Pub/Sub) to decouple services and improve scalability. Enabled reliable, ordered message processing across microservices, eliminating tight coupling and reducing the blast radius of individual service failures."
                    metrics={["Decoupled microservices", "Improved scalability"]}
                  />
                </Col>

                <Col md={6} className="project-card">
                  <ServiceLinkCard
                    category="Automation · Middleware"
                    title="Document Automation Pipeline"
                    description="Automated document extraction, normalization, and validation via middleware development. Replaced a largely manual process with a reliable, schema-driven pipeline that dramatically reduced processing time, human error, and operational overhead."
                    metrics={["44% efficiency gain", "$1.1M annual savings"]}
                  />
                </Col>

              </Row>
            </Tab.Pane>

            {/* ── Deloitte ── */}
            <Tab.Pane eventKey="deloitte">
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={food}
                    isBlog={false}
                    title="McDonald's"
                    description={[
                      "Integrated Angular-based admin dashboards with AWS Lambda and S3 for dynamic menu management.",
                      "Reduced API response time by 25% and cut time-to-market for new offerings by 30%.",
                      "Optimized CI/CD pipelines using Jenkins and GitHub Actions, cutting deployment time by 40%.",
                      "Mentored 10 junior developers through internal JavaScript training sessions.",
                    ]}
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={healthcare}
                    isBlog={false}
                    title="Anthem Healthcare"
                    description={[
                      "Built data-driven dashboards using React, D3.js, and ChartJS to monitor operational performance.",
                      "Reduced system downtime by 25% for large-scale enterprise systems.",
                      "Designed reusable data-visualization components that improved planning accuracy by 40%.",
                      "Built data pipelines for a national health-benefits provider to streamline reporting workflows.",
                    ]}
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={factoryLogo}
                    isBlog={false}
                    title="Smart Factory"
                    description={[
                      "Part of Amazon and Deloitte's Smart Factory initiative.",
                      "Built UI screens to improve operational performance, visibility, and production quality.",
                      "Developed Asset View, Sub Asset View, Global View, and Command Center screens.",
                      "Helped reduce downtime and improve real-time tracking across factory operations.",
                    ]}
                  />
                </Col>

              </Row>
            </Tab.Pane>

            {/* ── Carnegie Mellon ── */}
            <Tab.Pane eventKey="cmu">
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={fitness}
                    isBlog={false}
                    title="FitConnect"
                    description={[
                      "Full-stack fitness platform built with React and Python/Django for 1,000+ CMU students.",
                      "Designed 30+ backend endpoints with Django REST Framework and AJAX for real-time data handling.",
                      "Integrated social media features, interactive challenges, and personal fitness tracking.",
                      "Implemented OAuth for secure authentication and deployed the application on Amazon EC2.",
                    ]}
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={currency}
                    isBlog={false}
                    title="Exchange Rate App"
                    description={[
                      "Built a Java-based web service integrating real-time third-party exchange rate APIs.",
                      "Persisted data in MongoDB Atlas and containerized the application with Docker.",
                      "Developed a user-friendly Android interface for on-the-go currency conversion.",
                      "Added a web-based analytics dashboard for tracking and visualizing historical rates.",
                    ]}
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={streamify}
                    isBlog={false}
                    title="Streamify"
                    description={[
                      "Single-page analytics application providing insights into user activity, revenue, and content performance for a fictional music streaming service.",
                      "Built interactive data visualizations including charts and tables with sorting and filtering.",
                      "Used React and Bootstrap for a fully responsive design.",
                      "Added custom navigation elements for an improved user experience.",
                    ]}
                  />
                </Col>

              </Row>
            </Tab.Pane>

          </Tab.Content>
        </Tab.Container>

      </Container>
    </Container>
  );
}

export default Projects;
