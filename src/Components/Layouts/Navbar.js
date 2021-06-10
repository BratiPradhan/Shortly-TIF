import { Nav, Brand, NavLinks, Login, Auth } from '../StyledComponents/Navbar.style'

export default function Navbar() {

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
