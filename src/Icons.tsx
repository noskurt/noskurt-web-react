import './Icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Icons() {
  const professionalLinks = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/emrebozkurt26', label: 'LinkedIn', external: true },
    { icon: faGithub, url: 'https://github.com/noskurt', label: 'GitHub', external: true },
    { icon: faEnvelope, url: 'mailto:info@emrebozkurt.de', label: 'Email', external: false }
  ];

  return (
    <nav className="icons-container" aria-label="Professional links">
      {professionalLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          className="icon-link"
        >
          <FontAwesomeIcon icon={link.icon} className="icon" aria-hidden="true" />
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default Icons;
