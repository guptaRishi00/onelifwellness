import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="olw-call-to-action">
      <div className="olw-footer-cta-container">
        <div className="olw-footer-cta-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <Link to={buttonLink}>
            <button className="green-button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
