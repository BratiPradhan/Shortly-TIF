import styled from 'styled-components'

export const Nav = styled.nav`
grid-column: 2 / -2;
display: flex;
align-items: center;
font-size: 0.8rem;
background-color: white;
width: 100%;

@media only screen and (max-width: 375px) {
    background-color: ${props => props.theme.primary.darkViolet} ;
    flex-direction: column;
    align-items: center;
}
`

export const NavLinks = styled.a`
padding: 1rem 0.9rem;
margin-top: 0.1rem;
text-decoration: none;
color: ${props => props.theme.neutral.grayishViolet};
font-weight: 700;
&:hover {
    color: ${props => props.theme.neutral.veryDarkViolet};
}

@media only screen and (max-width: 375px) {
    flex: 1;
    color: white;
    font-size: ${props => props.theme.fontSize};
    &:hover {
    color: ${props => props.theme.primary.cyan};
}
}
`

export const Auth = styled(NavLinks)`
border-radius: 2rem;
padding: 0.6rem 1.4rem;
&:hover {
    background-color: ${props => props.theme.primary.cyan};
    color: white;
}
`

export const Login = styled(Auth)`
margin-left: auto;

@media only screen and (max-width: 375px) {
    margin: 0rem;
}
`

export const Brand = styled(NavLinks)`
font-size: 1.6rem;
margin: 0rem 0.5rem 0rem 0rem;
padding-left: 0rem;
font-weight: 900;
color: ${props => props.theme.neutral.veryDarkViolet};

@media only screen and (max-width: 375px){
color: white;
}
`