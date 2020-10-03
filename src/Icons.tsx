import React from 'react';
import './Icons.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faFacebook,
  faTwitter,
  faTwitch,
  faInstagram,
  faSteam
} from '@fortawesome/free-brands-svg-icons';

class Icons extends React.Component {
  render() {
    return (
      <div className='Icons'>
        <a rel='noopener noreferrer' href='mailto:emre.bozkurt@reev.com' target='_blank'>
          <FontAwesomeIcon icon={faEnvelope} size={'3x'} className={'Icon Envelope'}/>
        </a>
        <a rel='noopener noreferrer' href='https://www.linkedin.com/in/emrebozkurt26' target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} size={'3x'} className={'Icon LinkedIn'}/>
        </a>
        <a rel='noopener noreferrer' href='https://github.com/noskurt' target='_blank'>
          <FontAwesomeIcon icon={faGithub} size={'3x'} className={'Icon GitHub'}/>
        </a>
        <a rel='noopener noreferrer' href='https://www.instagram.com/noskurt' target='_blank'>
          <FontAwesomeIcon icon={faInstagram} size={'3x'} className={'Icon Instagram'}/>
        </a>
        <a rel='noopener noreferrer' href='https://twitter.com/noskurt' target='_blank'>
          <FontAwesomeIcon icon={faTwitter} size={'3x'} className={'Icon Twitter'}/>
        </a>
        <a rel='noopener noreferrer' href='https://www.facebook.com/noskurt' target='_blank'>
          <FontAwesomeIcon icon={faFacebook} size={'3x'} className={'Icon Facebook'}/>
        </a>
        <a rel='noopener noreferrer' href='https://www.youtube.com/javaca' target='_blank'>
          <FontAwesomeIcon icon={faYoutube} size={'3x'} className={'Icon Youtube'}/>
        </a>
        <a rel='noopener noreferrer' href='https://www.twitch.tv/noskurt' target='_blank'>
          <FontAwesomeIcon icon={faTwitch} size={'3x'} className={'Icon Twitch'}/>
        </a>
        <a rel='noopener noreferrer' href='https://steamcommunity.com/id/noskurt' target='_blank'>
          <FontAwesomeIcon icon={faSteam} size={'3x'} className={'Icon Steam'}/>
        </a>
      </div>
    );
  }
}

export default Icons;
