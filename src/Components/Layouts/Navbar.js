import brandLogo from '../../Images/logo.svg'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <a href="/" ><img src={brandLogo} alt="BRAND LOGO"/></a>
                <a href="/" >Features</a>
                <a href="/" > Pricing</a>
                <a href="/" >Resources</a>
                <a href="/" >Login</a>
                <a href="/" >SignUp</a>
            </ul>
        </nav>
    )
}
