import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './global.scss';
import './App.scss';

import TopBar from './components/topbar/TopBar';
import Menu from './components/menu/Menu';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

import axios from 'axios';

import { useTranslation } from 'react-i18next';

const githubApi = {
  baseURL: 'https://api.github.com/users/',
  user_name: 'CRISTIAN-MULLER',
  client_id: 'Iv1.97dde620e78b7739',
  client_secret: 'bc5d54719db6e05ce79336eec77ecb45064138c2',
};

function App() {
  const [loading, setLoading] = useState(true);
  const [userRepositoriesData, setUserRepositoriesData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
    // setChangeLanguage(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        githubApi.baseURL + githubApi.user_name + '/repos'
      );
      setUserRepositoriesData(data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <TopBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        changeLanguage={changeLanguage}
        setChangeLanguage={setChangeLanguage}
        changeLanguageHandler={changeLanguageHandler}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro
          changeLanguage={changeLanguage}
          setChangeLanguage={setChangeLanguage}
          changeLanguageHandler={changeLanguageHandler}
        />
        <Portfolio userRepositoriesData={userRepositoriesData} />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
