import styled from 'styled-components'

export default function Navbar() {

    const Nav = styled.nav`
        grid-column: 1 / -1;
        display: flex;
        font-size: ${props => props.theme.fontSize};
        background-color: white;
        width: 100%;

        @media only screen and (max-width: 375px) {
            background-color: ${props => props.theme.primary.darkViolet} ;
            flex-direction: column;
            align-items: center;
  }
    `

    const NavLinks = styled.a`
    padding: 1rem;
        text-decoration: none;
        color: ${props => props.theme.neutral.grayishViolet};
        font-weight: 500;
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

    const Auth = styled(NavLinks)`
        border-radius: 0.5rem;
        &:hover {
            background-color: ${props => props.theme.primary.cyan};
            color: white;
        }
    `

    const Login = styled(Auth)`
        margin-left: auto;

        @media only screen and (max-width: 375px) {
            margin: 0rem;
        }
    `

const Brand = styled(NavLinks)`
font-size: 2rem;
font-weight: 900;
color: ${props => props.theme.neutral.veryDarkViolet};

@media only screen and (max-width: 375px){
    color: white;
}
`

    return (
        <Nav>
            <Brand href="/src/Components/Layouts/Home.js" >Shortly</Brand>
            <NavLinks href="/src/Components/Layouts/Home.js" >Features</NavLinks>
            <NavLinks href="/src/Components/Layouts/Home.js" > Pricing</NavLinks>
            <NavLinks href="/src/Components/Layouts/Home.js" >Resources</NavLinks>
            <Login href="/src/Components/Layouts/Home.js" >Login</Login>
            <Auth href="/src/Components/Layouts/Home.js" >SignUp</Auth>
        </Nav>
    )
}
