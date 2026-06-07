import React from "react";
import Card from "react-bootstrap/Card";

function ServiceLinkCard({ title, category, description, metrics, icon: Icon }) {
  return (
    <Card className="servicelink-card-view">
      <Card.Body>
        {Icon && <div className="servicelink-icon"><Icon /></div>}
        <div className="servicelink-category">{category}</div>
        <Card.Title className="servicelink-title">{title}</Card.Title>
        <Card.Text as="div">
          <p className="servicelink-description">{description}</p>
          {metrics && metrics.length > 0 && (
            <div className="servicelink-metrics">
              {metrics.map((m, i) => (
                <span key={i} className="metric-badge">{m}</span>
              ))}
            </div>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceLinkCard;
