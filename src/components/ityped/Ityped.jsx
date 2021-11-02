import React, { useRef, useState, useEffect } from 'react';

import { init } from 'ityped';
// import { Container } from './styles';
import { useTranslation } from 'react-i18next';

function Ityped(changeLanguage) {
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
    <h3>
      {t('home.freelance')} <span ref={textRef} id="ityped"></span>
    </h3>
  );
}

export default Ityped;
