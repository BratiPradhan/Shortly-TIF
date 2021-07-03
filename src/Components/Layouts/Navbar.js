import { useState } from 'react'
import { Nav, Brand, NavLinkWrapper, NavLinks, Login, Auth, NavToggleButton } from '../StyledComponents/Navbar.style'


export default function Navbar() {

    const [ relative, setRelative ] = useState(false)

    return (
        <Nav>
            <Brand href="/" >Shortly</Brand>
            <NavToggleButton onClick={() => setRelative(relative => !relative)}><i className="fas fa-bars"></i></NavToggleButton>
            <NavLinkWrapper relative={relative}>
            <NavLinks href="/" >Features</NavLinks>
            <NavLinks href="/" > Pricing</NavLinks>
            <NavLinks href="/" >Resources</NavLinks>
            <Login href="/" >Login</Login>
            <Auth href="/" >Sign Up</Auth>
            </NavLinkWrapper>
        </Nav>
    )
}
