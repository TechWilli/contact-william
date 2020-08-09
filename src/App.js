import React, { useState, useEffect, useCallback, useContext } from "react";
import "./App.css";
import Layout from "./components/background-layout/Layout";
import Card from "./components/card/Card";
import ThemeSwitcher from './components/theme-switcher/ThemeSwitcher';
import LanguageSwitcher from './components/language-switcher/LanguageSwitcher';
import { ThemeProvider } from "styled-components";
import dark from './themes/Dark';
import light from './themes/Light';
import LanguageProvider from './contexts/LanguageContext';

function App() {

  const [theme, setTheme] = useState(light);

  useEffect(() => {
    
    const storedTheme = localStorage.getItem('theme');
    setTheme(JSON.parse(storedTheme) || light);

  }, []);

  const toggleTheme = useCallback(() => {

    setTheme(theme => {
      if (theme.title === 'light') {
        localStorage.setItem('theme', JSON.stringify(dark));
        return dark;

      } else {
        localStorage.setItem('theme', JSON.stringify(light));
        return light;
      }
    });

  }, [theme]);

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Layout />
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <Card />
        <LanguageSwitcher />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
