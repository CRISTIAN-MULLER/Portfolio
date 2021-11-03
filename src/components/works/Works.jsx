import React, { useState } from 'react';

import './Works.scss';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: '1 Web Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930',
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: '2 Mobile Application',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: '3 Branding',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
    },
    {
      id: '4',
      icon: './assets/writing.png',
      title: '4 Teste',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container" key={item.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="mobile" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        //onClick={() => handleClick("left")}
      /> */}

      <ArrowBackIos
        className="arrow left"
        onClick={() => handleClick('left')}
      />
      <ArrowForwardIosIcon
        className="arrow right"
        onClick={() => handleClick()}
      />

      {/* <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        //onClick={() => handleClick()}
      /> */}
    </div>
  );
}

export default Works;
