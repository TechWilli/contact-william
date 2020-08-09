import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { LanguageContext } from '../../contexts/LanguageContext';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 95%;
  transform: translate(-50%, -95%);
`;

const LanguageButton = styled.button`
  margin: 0 8px;
  color: ${props => props.clicked ? props.theme.colors.titleColor : props.theme.colors.bodyText};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.titleColor};
  }
`;

const Separator = styled.span`
  color: ${props => props.theme.colors.bodyText};
  font-size: 1rem;
  font-weight: bold;
`;

const LanguageSwitcher = (props) => {
  const { language, translateLanguage } = useContext(LanguageContext);
  
  const [isPortuguese, setIsPortuguese] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {

    if (language === 'PT-BR') {
      setIsPortuguese(true);
      setIsEnglish(false);

    } else if (language === 'EN') {
      setIsEnglish(true);
      setIsPortuguese(false);

    } else {
      setIsEnglish(false);
      setIsPortuguese(false);
    }

  }, [language]);

  const handlePortuguese = () => {
    translateLanguage('PT-BR');
    setIsPortuguese(true);
    setIsEnglish(false);
  }

  const handleEnglish = () => {
    translateLanguage('EN');
    setIsEnglish(true);
    setIsPortuguese(false)
  }

  return (
    <Container>
      <LanguageButton clicked={isPortuguese} type="button" onClick={handlePortuguese}>PT-BR</LanguageButton>
      <Separator>|</Separator>
      <LanguageButton clicked={isEnglish} type="button" onClick={handleEnglish}>EN</LanguageButton>
    </Container>
  );
}

export default LanguageSwitcher;