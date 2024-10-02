import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
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
          My Projects <strong className="purple">and clients </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on at CMU, and with Deloitte.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Fitconnect"
              description="FitConnect is a dynamic full stack fitness platform developed using React and Python/Django, 
              designed specifically for over 1,000 CMU students. It enriches the fitness journey by integrating social media for 
              community engagement, offering interactive challenges to boost competition and motivation, and providing personal 
              fitness tracking to monitor progress. The platform supports secure login with OAuth and boasts over 30 backend endpoints created with Django 
              REST Framework for efficient, real-time data handling and AJAX for swift API interactions."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Exchange Rate App"
              description="Developed a user-friendly currency conversion app, featuring an Android interface and a Java-based web service. 
              The app uses a third-party API to provide real-time exchange rates and stores data with MongoDB Atlas. Additionally, 
              it includes a straightforward web-based analytics dashboard, all deployed using Docker and GitHub."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="McDonalds"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcare}
              isBlog={false}
              title="Anthem Healthcare"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamify}
              isBlog={false}
              title="Streamify"
              description="a comprehensive single-page application that provides vital insights into user activity, 
              revenue, and content performance for a fictional music streaming service. This project showcases my skills in React , 
              involves interactive data visualizations like charts and tables with sorting and filtering capabilities, and utilizes 
              Bootstrap for a responsive design. Additional features include custom navigation elements, enhancing user experience and
              functionality."
             
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={factoryLogo}
              isBlog={false}
              title="Smart Factory"
              description="Part of Amazon and deloitte's Smart Factory.  Built UI to upgrade operational performance, increase visibility, and
advance production quality, while also reducing downtime. Built screens such as Asset View Screen, Sub Asset View, Gloabl view and Command Center to track factpries' ongoing activities.
 "
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
