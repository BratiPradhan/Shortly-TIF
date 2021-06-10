import styled from 'styled-components'

import brandLogo from '../../Images/logo.svg'

export default function Navbar() {

    const Nav = styled.nav`
        grid-column: 1 / -1;
        display: flex;
        font-size: ${props => props.theme.fontSize};
        background-color: white;
        flex-wrap: wrap;
    `

    const NavLinks = styled.a`
    padding: 1rem;
        text-decoration: none;
        color: ${props => props.theme.neutral.grayishViolet};
        font-weight: 500;
        &:hover {
            color: ${props => props.theme.neutral.veryDarkViolet};
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
    `

    return (
        <Nav>
            <NavLinks href="/" ><img src={brandLogo} alt="BRAND LOGO"/></NavLinks>
            <NavLinks href="/" >Features</NavLinks>
            <NavLinks href="/" > Pricing</NavLinks>
            <NavLinks href="/" >Resources</NavLinks>
            <Login href="/" >Login</Login>
            <Auth href="/" >SignUp</Auth>
        </Nav>
    )
}
