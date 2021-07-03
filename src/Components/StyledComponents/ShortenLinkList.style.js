import styled, {css} from 'styled-components'

export const WrapperShortenLinkList = styled.ul`
grid-column: 2 / -2;
display: flex;
flex-direction: column;
padding: 0rem;
font-size: 1rem;

@media only screen and (max-width: 600px){
    grid-column: 1 / -2;
    align-items: center;
}
`
export const Items = styled.li`
margin: 0.4rem 0rem;
padding: 0.6rem;
display: flex;
background-color: ${props => props.theme.neutral.lightGray};
justify-content: flex-start;

@media only screen and (max-width: 600px){
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0.2rem;
    align-items: flex-start;
}
`

export const Button = styled.button`
background: ${props => props.theme.primary.cyan};
border-radius: 5px;
border: 2px solid ${props => props.theme.primary.cyan};
color: white;
margin: 0.5rem 1rem;
padding: 0.25rem 1rem;
width: 8vw;
font-weight: 700;

@media only screen and (max-width: 600px){
width: 100%;
margin: 0rem;
}

${props => props.copied && css`
background: ${props => props.theme.neutral.veryDarkViolet};
border: 2px solid ${props => props.theme.neutral.veryDarkViolet};
color: white;
`}

`

export const FullUrl = styled.p`
color: ${props => props.theme.neutral.veryDarkViolet};
`
export const ShortUrl = styled.p`
color: ${props => props.theme.primary.cyan};
margin-left: auto;

`