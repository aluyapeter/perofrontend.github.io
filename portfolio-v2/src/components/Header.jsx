import React from 'react';
import SocialLink from './SocialLink';
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className="nav-container">
      <div id="contacts" className="contact-links">
        <SocialLink
          href="https://github.com/aluyapeter"
          icon={faGithub}
          label="GitHub"
        />
        <SocialLink
          href="https://twitter.com/i47thsaint"
          icon={faXTwitter}
          label="X"
        />
        <SocialLink
          href="https://www.linkedin.com/in/peter-aluya-83a323357/"
          icon={faLinkedin}
          label="LinkedIn"
        />
      </div>
    </div>
  );
};

export default Header;
