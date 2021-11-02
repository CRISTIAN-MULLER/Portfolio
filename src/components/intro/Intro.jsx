import React, { useEffect, useRef } from 'react';

import Ityped from '../ityped/Ityped';
import { init } from 'ityped';

import './Intro.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

function Intro(changeLanguage) {
  const { t } = useTranslation();
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        `${t('home.analista')}`,
        `${t('home.desenvolvedorFull')}`,
        `${t('home.desenvolvedorWeb')}`,
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="/assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>{t('home.oi')}</h2>
          <h1>Cristian Müller</h1>
          {/* <Ityped changeLanguage={changeLanguage} /> */}
          <h3>
            {t('home.freelance')} <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <KeyboardArrowDownIcon className="arrowDownIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
