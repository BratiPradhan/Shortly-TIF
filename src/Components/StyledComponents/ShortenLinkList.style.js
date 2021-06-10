import styled, {css} from 'styled-components'

export const WrapperShortenLinkList = styled.ul`
grid-column: 2 / -2;
display: flex;
flex-direction: column;

@media only screen and (max-width: 375px){
    grid-column: 1 / -2;
    align-items: center;
}
`
export const Items = styled.li`
margin: 1rem;
display: flex;
background-color: white;
justify-content: space-between;

@media only screen and (max-width: 375px){
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0.2rem;
    align-items: flex-start;
    padding: 1rem;
}
`

export const Button = styled.button`
background: ${props => props.theme.primary.cyan};
border-radius: 3px;
border: 2px solid ${props => props.theme.primary.cyan};
color: white;
margin: 0.5rem 1rem;
padding: 0.25rem 1rem;
width: 8vw;

@media only screen and (max-width: 375px){
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

`