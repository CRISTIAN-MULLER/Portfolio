import React from 'react';

import './TopBar.scss';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import Flag from 'react-flagpack';

const Topbar: React.FC = ({ menuOpen, setMenuOpen, changeLanguageHandler }) => {
  return (
    <div className={`topbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <div className="socialContainer">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/cristian-müller"
              className="link"
              rel="noreferrer"
            >
              <LinkedInIcon className="icon social" />

              <span>https://www.linkedin.com/in/cristian-müller</span>
            </a>
            <a
              target="_blank"
              href="https://github.com/CRISTIAN-MULLER"
              className="link"
              rel="noreferrer"
            >
              <GitHubIcon className="icon social" />

              <span>https://github.com/CRISTIAN-MULLER</span>
            </a>
          </div>
          <div className="phoneNumber">
            <div className="number">
              <PersonIcon className="icon" />
              <span>+55 27 99518-1848</span>
            </div>
            <PersonIcon className="icon" />
            <span>+55 27 99694-3836</span>
          </div>
          <div className="email">
            <EmailIcon className="icon" />
            <span>muller.cristian@outlook.com</span>
          </div>
          <div className="country">
            <div
              className="flag"
              onClick={() => changeLanguageHandler('pt-BR')}
            >
              <Flag code="BR" gradient="top-down" size="l" hasBorder={false} />
            </div>
            <div
              className="flag"
              onClick={() => changeLanguageHandler('en-US')}
            >
              <Flag code="US" gradient="top-down" size="l" hasBorder={false} />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
