import styled from 'styled-components'
import bgShortenDesktop from '../../Images/bg-shorten-desktop.svg'
import bgShortenMobile from '../../Images/bg-shorten-mobile.svg'

export const WrapperShortenLink = styled.article`
grid-column: 2 / -2;
background-image: url(${bgShortenDesktop}) ;
background-color: ${props => props.theme.primary.darkViolet};
background-size: cover;
height: 23vh;
display: flex;
justify-content: space-evenly;
align-items: center;
border-radius: 0.5rem;
font-size: 1rem;

@media (max-width: 375px){
background-image: url(${bgShortenMobile}) ;
width: 100%;
grid-column: 1 / -2;
justify-content: space-evenly;
}
`
export const UrlInput = styled.input.attrs({
type: 'text',
})`
border: 2px solid ${props => props.theme.primary.cyan};
border-radius: 0.5rem;
padding: 1.1rem 1.4rem 0.9rem;
/* margin: 1rem; */
width: 62vw;

::placeholder {
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.neutral.gray}
}

@media (max-width: 375px){
margin: 0.2rem;
padding: 0.4rem;
width: 40vw;
}
`
export const Submit = styled.button`
padding: 1rem 2rem;
color: white;
background-color: ${props => props.theme.primary.cyan};
border: 2px solid ${props => props.theme.primary.cyan};
border-radius: 0.5rem;
font-size: 1rem;
font-weight: 700;

@media (max-width: 375px){
padding: 0.4rem;
}
`