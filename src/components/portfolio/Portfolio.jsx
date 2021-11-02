import React, { useState, useEffect } from 'react';

import './Portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useTranslation } from 'react-i18next';

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from '../../data';

function Portfolio({ userRepositoriesData }) {
  const { t } = useTranslation();
  const userData = userRepositoriesData.map((item) => ({
    name: item.name,
    ownerName: item.owner.login,
    imageURL: `https://raw.githubusercontent.com/${item.owner.login}/${item.name}/${item.default_branch}/Tela.png`,
  }));

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const portfolioList = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web Apps',
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
    },
    {
      id: 'backend',
      title: 'Backend APIs',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'content':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>{t('portfolio.portifolio')}</h1>
      <ul>
        {portfolioList.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            id={item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {/* {userData.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.imageURL} alt="Logo" />
            <h3 key={item.id}> {item.name}</h3>
          </div>
        ))} */}

        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
