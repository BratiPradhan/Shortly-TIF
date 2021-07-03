import styled, {css} from 'styled-components'

export const Nav = styled.nav`
grid-column: 2 / -2;
display: flex;
align-items: center;
font-size: 0.8rem;
background-color: white;
width: 100%;

@media only screen and (max-width: 600px) {
    /* background-color: ${props => props.theme.primary.darkViolet} ; */
    /* flex-direction: column; */
    align-items: center;
    position: relative;
justify-content: space-between;
}
`

export const NavToggleButton = styled.button`
display: none;
@media only screen and (max-width: 600px) {
display: contents;
/* justify-self: flex-end; */
}
`

export const NavLinkWrapper = styled.div`
display: flex;
width: 100%;

@media only screen and (max-width: 600px) {
    
    ${props => props.relative && css`
    flex-direction: column;
position: fixed;
top: 10%;
left: 1rem;
right: 1rem;
bottom: 30%;
width: auto;
z-index: 1;
/* display: table; */
background-color: ${props => props.theme.primary.darkViolet} ;
border-radius: 0.5rem;
text-align: center;
/* margin-left: 1rem; */
`}

    ${props => !props.relative && css`
display: none;
  `}
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

@media only screen and (max-width: 600px) {
    color: white;
    /* width: 100%; */
    font-size: ${props => props.theme.fontSize};
    font-weight: 500;
    &:hover {
    color: ${props => props.theme.primary.cyan};
}
}
`

export const Auth = styled(NavLinks)`
border-radius: 2rem;
align-self: center;
padding: 0.6rem 1.4rem;
&:hover {
    background-color: ${props => props.theme.primary.cyan};
    color: white;
}

@media only screen and (max-width: 600px) {
    margin: 1rem;
    width: 70%;
    display: inline-block;
}
`

export const Login = styled(Auth)`
margin-left: auto;

@media only screen and (max-width: 600px) {
    margin: 1rem;
    /* width: 80%; */
}
`

export const Brand = styled(NavLinks)`
font-size: 1.6rem;
margin: 0rem 0.5rem 0rem 0rem;
padding-left: 0rem;
font-weight: 900;
color: ${props => props.theme.neutral.veryDarkViolet};


`