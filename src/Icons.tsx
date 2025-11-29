import React from 'react';
import './Icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faXTwitter,
  faTwitch,
  faInstagram,
  faSteam
} from '@fortawesome/free-brands-svg-icons';

const Icons: React.FC = () => {
  const socialLinks = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/emrebozkurt26', label: 'LinkedIn', className: 'linkedin' },
    { icon: faGithub, url: 'https://github.com/noskurt', label: 'GitHub', className: 'github' },
    { icon: faInstagram, url: 'https://www.instagram.com/noskurt', label: 'Instagram', className: 'instagram' },
    { icon: faXTwitter, url: 'https://twitter.com/noskurt', label: 'Twitter', className: 'twitter' },
    { icon: faYoutube, url: 'https://www.youtube.com/@noskurt', label: 'YouTube', className: 'youtube' },
    { icon: faTwitch, url: 'https://www.twitch.tv/noskurt', label: 'Twitch', className: 'twitch' },
    { icon: faSteam, url: 'https://steamcommunity.com/id/noskurt', label: 'Steam', className: 'steam' },
    { icon: faEnvelope, url: 'mailto:info@emrebozkurt.de', label: 'Email', className: 'envelope' }
  ];

  return (
    <div className="icons-container">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`icon-link ${link.className}`}
          aria-label={link.label}
        >
          <FontAwesomeIcon icon={link.icon} className="icon" />
        </a>
      ))}
    </div>
  );
};

export default Icons;
