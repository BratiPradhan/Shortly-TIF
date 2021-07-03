import { useState } from 'react'
import { Nav, Brand, NavLinkWrapper, NavLinks, Login, Auth, NavToggleButton } from '../StyledComponents/Navbar.style'


export default function Navbar() {

    const [ relative, setRelative ] = useState(false)

    return (
        <Nav>
            <Brand href="/src/Components/Layouts/Home.js" >Shortly</Brand>
            <NavToggleButton onClick={() => setRelative(relative => !relative)}><i className="fas fa-bars"></i></NavToggleButton>
            <NavLinkWrapper relative={relative}>
            <NavLinks href="/src/Components/Layouts/Home.js" >Features</NavLinks>
            <NavLinks href="/src/Components/Layouts/Home.js" > Pricing</NavLinks>
            <NavLinks href="/src/Components/Layouts/Home.js" >Resources</NavLinks>
            <Login href="/src/Components/Layouts/Home.js" >Login</Login>
            <Auth href="/src/Components/Layouts/Home.js" >Sign Up</Auth>
            </NavLinkWrapper>
        </Nav>
    )
}
