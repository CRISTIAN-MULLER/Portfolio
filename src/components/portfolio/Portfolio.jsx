import React, { useState, useEffect } from 'react';

import './Portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useTranslation } from 'react-i18next';

function Portfolio({ userRepositoriesData }) {
  const { t } = useTranslation();
  const userData = userRepositoriesData.map((item) => ({
    id: item.id,
    name: item.name.replace(/-/g, ' '),
    ownerName: item.owner.login,
    imageURL: `https://raw.githubusercontent.com/${item.owner.login}/${item.name}/${item.default_branch}/Tela.png`,
    topics: [...item.topics],
  }));

  const [data, setData] = useState(userData);

  console.log(data);

  const topics = userData
    .filter((item) => item.topics.length > 0)
    .map((topic) =>
      topic.topics.map((item) => {
        return item;
      })
    )
    .flat();

  const [selected, setSelected] = useState([]);

  const topicsWithoutDuplicates = [...new Set(topics)].map((item) => {
    return { id: item, title: item };
  });

  console.log('selec', selected);

  useEffect(() => {
    if (selected.length > 0) {
      const filteredData = [
        ...new Set(
          selected
            .map((topic) => {
              const temp = userData.filter((item) => {
                return item.topics.includes(topic);
              });
              return temp;
            })
            .flat()
        ),
      ];
      setData(filteredData);
      return;
    }
    setData(userData);
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>{t('portfolio.portifolio')}</h1>
      <ul>
        {topicsWithoutDuplicates.map((topic) => (
          <PortfolioList
            key={topic.id}
            topicId={topic.id}
            title={topic.title}
            active={selected.includes(topic.id)}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
      {
        <div className="container">
          {data.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.imageURL} alt="Logo" />
              <h3> {item.name}</h3>
            </div>
          ))}

          {/* {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
          ))} */}
        </div>
      }
    </div>
  );
}

export default Portfolio;
