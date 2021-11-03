import React from 'react';

import './PortfolioList.scss';

function PortfolioList({ topicId, title, active, selected, setSelected }) {
  const togleSelected = (topicId) => {
    if (selected.includes(topicId)) {
      console.log('já tem', topicId, selected);
      const filtered = selected.filter((item) => item !== topicId);
      console.log('filtered', filtered);
      setSelected(filtered);
      // console.log('nao tem mais', selected);
      return;
    }
    console.log('não tem', topicId, selected);

    setSelected([topicId, ...selected]);
  };

  return (
    <li
      key={topicId}
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => togleSelected(topicId)}
    >
      {title}
    </li>
  );
}
export default PortfolioList;
