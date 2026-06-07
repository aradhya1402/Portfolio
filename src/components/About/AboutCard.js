import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-para">
            Hello! I'm{" "}
            <span className="purple">Aradhya Asthana</span>, a Software Engineer
            currently working at{" "}
            <span className="purple">ServiceLink</span> in{" "}
            <span className="purple">Pittsburgh, Pennsylvania</span>.
          </p>

          <p className="about-para">
            Over the past 1.5 years, I've been building enterprise-scale
            applications as a Full-Stack Developer, with a strong focus on
            backend engineering, APIs, cloud services, and scalable system
            design. I earned my Master's in Information Systems Management from{" "}
            <span className="purple">Carnegie Mellon University</span> and
            previously worked at{" "}
            <span className="purple">Deloitte</span>, where I developed
            solutions for large-scale business and technology challenges.
          </p>

          <p className="about-para">
            I enjoy solving complex engineering problems, designing reliable
            systems, and continuously learning new technologies.
          </p>

          <p className="about-hobbies-label">
            Beyond technology, you'll find me:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new experiences
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
