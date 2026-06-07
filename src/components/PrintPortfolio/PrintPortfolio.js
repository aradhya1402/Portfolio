import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { TbBrain } from "react-icons/tb";

function PrintPortfolio() {
  return (
    <div className="print-portfolio">

      {/* Download button — hidden when printing */}
      <div className="print-controls no-print">
        <button className="print-download-btn" onClick={() => window.print()}>
          <AiOutlineDownload style={{ marginRight: "8px" }} />
          Download PDF
        </button>
        <p className="print-hint">
          In the print dialog, choose "Save as PDF" as the destination.
        </p>
      </div>

      <div className="print-content">

        {/* Header */}
        <header className="print-header">
          <h1 className="print-name">Aradhya Asthana</h1>
          <p className="print-title">Software Engineer</p>
          <div className="print-contact">
            <span>aradhya.ast@gmail.com</span>
            <span>+1 (412) 251-6340</span>
            <span>Pittsburgh, PA</span>
            <span>linkedin.com/in/aradhyaasthana</span>
            <span>github.com/aradhya1402</span>
          </div>
        </header>

        <hr className="print-divider" />

        {/* Summary */}
        <section className="print-section">
          <h2 className="print-section-title">Summary</h2>
          <p className="print-body">
            Software Engineer with 5+ years of experience building scalable applications and backend systems.
            Experienced in C#, Java, JavaScript, React, Node.js, Python, and cloud technologies.
            Passionate about system design, backend engineering, and creating reliable software solutions.
            Currently exploring AI applications, LLMs, and agentic systems, with a growing interest in building intelligent, AI-driven products.
          </p>
        </section>

        <hr className="print-divider" />

        {/* Experience */}
        <section className="print-section">
          <h2 className="print-section-title">Experience</h2>

          <div className="print-job">
            <div className="print-job-header">
              <span className="print-company">ServiceLink</span>
              <span className="print-job-meta">Software Engineer · Pittsburgh, PA · Oct 2024 – Present</span>
            </div>
            <ul className="print-bullets">
              <li>
                <strong>AI Feedback Loop (Document Extraction)</strong> — Designed and implemented a closed-loop feedback system
                for an AI-powered document extraction platform processing 100+ title-related fields. Built dynamic field-mapping
                logic to capture user corrections and feed structured payloads back to AI services, enabling continuous confidence
                score retraining across a multi-service pipeline.
              </li>
              <li>
                <strong>Distributed Data Processing</strong> — Designed distributed backend services in C#/.NET Core to process
                high-volume external data with idempotency, schema validation, and fault tolerance, reducing end-to-end latency by 50%.
              </li>
              <li>
                <strong>RESTful API Platform</strong> — Developed and maintained REST APIs consumed by multiple downstream services,
                implementing authentication and token caching, reducing API latency by 20% under peak load.
              </li>
              <li>
                <strong>Event-Driven Microservices</strong> — Built asynchronous workflows using Azure Service Bus (Pub/Sub) to
                decouple services, improve scalability, and enable reliable execution across microservices.
              </li>
              <li>
                <strong>Document Automation Pipeline</strong> — Automated document extraction, normalization, and validation via
                middleware development, delivering 44% efficiency improvement and $1.1M in annual cost savings.
              </li>
            </ul>
          </div>

          <div className="print-job">
            <div className="print-job-header">
              <span className="print-company">Deloitte</span>
              <span className="print-job-meta">Technology Consultant · Aug 2019 – Apr 2023</span>
            </div>
            <ul className="print-bullets">
              <li>
                <strong>McDonald's</strong> — Integrated Angular-based admin dashboards with AWS Lambda and S3 for dynamic menu
                management, reducing API response time by 25% and time-to-market for new offerings by 30%.
              </li>
              <li>
                <strong>Anthem Healthcare</strong> — Built data-driven dashboards using React, D3.js, and ChartJS to monitor
                operational performance, reducing system downtime by 25% and improving planning accuracy by 40%.
              </li>
              <li>
                <strong>Smart Factory (Amazon)</strong> — Built operational UI screens including Asset View, Global View, and
                Command Center to improve production visibility and reduce factory downtime.
              </li>
              <li>
                Optimized CI/CD pipelines using Jenkins and GitHub Actions, cutting deployment time by 40%.
                Mentored 10 junior developers through internal training sessions.
              </li>
            </ul>
          </div>
        </section>

        <hr className="print-divider" />

        {/* Academic Projects */}
        <section className="print-section">
          <h2 className="print-section-title">Academic Projects (Carnegie Mellon University)</h2>
          <ul className="print-bullets">
            <li>
              <strong>FitConnect</strong> — Full-stack fitness platform built with React and Python/Django for 1,000+ CMU students.
              Designed 30+ backend endpoints, integrated OAuth authentication, and deployed on Amazon EC2.
            </li>
            <li>
              <strong>Exchange Rate App</strong> — Java web service integrating real-time third-party exchange rate APIs,
              persisted in MongoDB Atlas, containerized with Docker, with an analytics dashboard.
            </li>
            <li>
              <strong>Streamify</strong> — Single-page analytics application for a fictional music streaming service with
              interactive charts, tables with sorting/filtering, and a fully responsive Bootstrap design.
            </li>
          </ul>
        </section>

        <hr className="print-divider" />

        {/* Skills */}
        <section className="print-section">
          <h2 className="print-section-title">Skills</h2>
          <div className="print-skills-grid">
            <div className="print-skill-group">
              <span className="print-skill-label">Languages</span>
              <span>C#, Java, JavaScript, TypeScript, Python</span>
            </div>
            <div className="print-skill-group">
              <span className="print-skill-label">Backend</span>
              <span>ASP.NET Core, REST APIs, Microservices, Django, Node.js</span>
            </div>
            <div className="print-skill-group">
              <span className="print-skill-label">Frontend</span>
              <span>React, Angular, Vue.js, HTML5, CSS3 / SCSS</span>
            </div>
            <div className="print-skill-group">
              <span className="print-skill-label">Databases</span>
              <span>SQL Server, PostgreSQL, MongoDB, Cosmos DB</span>
            </div>
            <div className="print-skill-group">
              <span className="print-skill-label">Cloud</span>
              <span>Azure (Service Bus, DevOps), AWS (Lambda, S3, EC2)</span>
            </div>
            <div className="print-skill-group">
              <span className="print-skill-label">Tools</span>
              <span>Docker, Git, GitHub Actions, Jenkins, Jira, Postman, Figma</span>
            </div>
          </div>
        </section>

        <hr className="print-divider" />

        {/* Education */}
        <section className="print-section">
          <h2 className="print-section-title">Education</h2>
          <div className="print-education">
            <div className="print-edu-row">
              <span className="print-school">Carnegie Mellon University, Pittsburgh, PA</span>
              <span className="print-edu-meta">Master of Information Systems Management · Aug 2024</span>
            </div>
            <div className="print-edu-row">
              <span className="print-school">Kalinga Institute of Industrial Technology, India</span>
              <span className="print-edu-meta">Bachelor of Information Technology · Jul 2015</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default PrintPortfolio;
