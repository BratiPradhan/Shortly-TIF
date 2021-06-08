

export default function Navbar() {
    return (
        <nav>
            <ul className="container">
                <li>Home</li>
                <li>Profile</li>
                <li className="search">
                    <input className="search-input" type="text" placeholder="Search" />
                </li>
                <li>Logout</li>
            </ul>
        </nav>
    )
}
