import React, { useContext, useEffect } from "react";
import styled from "styled-components";
// import WilliamPhoto from "./assets/images/one_piece_roger.png";
import WilliamProfile from "../../assets/images/william_profile.jpeg";
import { ReactComponent as Github } from "../../assets/icons/github-logo.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin-logo.svg";
import { LanguageContext } from '../../contexts/LanguageContext';
import { TextPTBR, TextEN, CardText } from './card-text/CardText';

const CardContainer = styled.div`
  width: 60vw;
  height: 75vh;
  background-color: ${props => props.theme.colors.cardColor};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19),
    0 12px 15px 0 rgba(0, 0, 0, 0.24);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const CardHeader = styled.div`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #0085AE;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 110px;
  position: relative;
  transition: .5s;
  @media (max-width: 850px) {
      margin-bottom: 80px;
  }
`;

const Divider = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  border-top: 1px solid ${props => props.theme.colors.titleColor};
  width: 100px;
`;

const GithubLogo = styled(Github)`
  width: 50px;
  height: 50px;
  padding: 0 10px;
  cursor: pointer;
  fill: ${props => props.theme.colors.githubColor};
`;

const LinkedinLogo = styled(Linkedin)`
  width: 50px;
  height: 50px;
  padding: 0 10px;
  cursor: pointer;
  fill: ${props => props.theme.colors.linkedinColor};
`;

const ImageProfile = styled.img`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  display: block;
`;

const ImageProfileContainer = styled.div`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid white;
  box-shadow: 3px 3px 10px rgb(0, 0, 0, .50);
  transition: 0.5s;
  @media (max-width: 850px) {
    width: 130px;
    height: 130px;
  }
`;

const LinkToPage = styled.a`
  transition: 0.2s;
  &:hover {
    transform: scale(1.3);
  }
`;

const CardTitle = styled.span`
  color: ${props => props.theme.colors.titleColor};
  font-size: 2rem;
  font-weight: bold;
  transition: 0.5s;
    
  @media (max-width: 850px) {
    font-size: 1.7rem;
  }
`;

const SocialMediaContainer = styled.div`
    height: 25%;
    display: flex;
    justify-content: center;	
`;

const Card = (props) => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    console.log('language', language);
    
  }, [language]);

  return (
    <CardContainer>
      <ContentWrapper>
        <CardHeader>
          <ImageProfileContainer>
            <ImageProfile src={WilliamProfile} alt="william" />
          </ImageProfileContainer>
        </CardHeader>

        <div
          style={{ width: "100%", /* backgroundColor: "lightgreen", */ /* height: "70%", */ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div>
            <CardTitle>{"< William Araujo />"}</CardTitle>
            <CardText style={{ marginTop: 5, fontWeight: 'bold' }}>{language === 'PT-BR' ? 'Desenvolvedor Front-end' : 'Front-end Developer'}</CardText>
          </div>
        </div>

        <Divider />

        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", }}>
          <div style={{ height: "75%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: '0 25px' }}>
            {language === 'PT-BR' ? <TextPTBR /> : <TextEN />}
            <Divider />
          </div>
          <SocialMediaContainer>
            <LinkToPage href="https://github.com/TechWilli" target="blank">
              <GithubLogo title="github" />
            </LinkToPage>

            <LinkToPage href="https://www.linkedin.com/in/william-araujo-516987112/" target="blank">
              <LinkedinLogo title="linkedin" />
            </LinkToPage>
          </SocialMediaContainer>
        </div>
      </ContentWrapper>
    </CardContainer>
  );
};

export default Card;
