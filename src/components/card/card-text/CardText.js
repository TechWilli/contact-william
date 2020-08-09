import React from 'react';
import styled from 'styled-components';

export const CardText = styled.span`
	display: block;
  line-height: 1.6rem;
  color: ${props => props.theme.colors.bodyText};
  font-size: 1rem;
	transition: 0.5s;
	
	@media (max-width: 850px) {
    line-height: 1.3rem;
    font-size: 0.7rem;
	}
`;

export const TextPTBR = () => {
  return (
    <>
      <CardText>
        Olá, tudo bem? Espero que você esteja ótimo.
			</CardText>
      <CardText>
        Esse é meu portfólio minimalista. Se quer entrar em contato, sinta-se livre para me procurar nas redes sociais.
      </CardText>
      <CardText>
        No Github você ira encontrar meus projetos e trabalhos em progresso. No Linkedin você pode encontrar minhas informações de carreira até o momento.
      </CardText>
    </>
  );
}

export const TextEN = () => {
  return (
    <>
      <CardText>
        Hi there! I hope you're doing great.
			</CardText>
      <CardText>
        Here is my minimalist portfolio. If you want to contact me, feel free to check up some of my social medias.
      </CardText>
      <CardText>
        In Github you will see my creative projects an works in progress. In Linkedin you can find out informations of my career until now.
      </CardText>
    </>
  );
}