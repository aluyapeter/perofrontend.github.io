import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ href, icon, label }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} />
      <span className="label">{label}</span>
    </a>
  );
};

export default SocialLink;
