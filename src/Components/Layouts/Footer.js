import React from 'react'
import styled from 'styled-components'
import brandLogo from '../../Images/logo.svg'


export default function Footer() {

    const WrapperFooter = styled.footer`
        grid-column: 1 / -1;
    `

    return (
        <WrapperFooter>
            <ul>
                <li><img src={brandLogo} alt="Brand Logo" /></li>
                <li>
                    <p>Features</p>
                    <ul>
                        <a href="/">Link Shortening</a>
                        <a href="/">Branded Links</a>
                        <a href="/">Analytics</a>
                    </ul>
                </li>
                <li>
                    <p>Resources</p>
                    <ul>
                        <a href="/">Blog</a>
                        <a href="/">Developers</a>
                        <a href="/">Support</a>
                    </ul>
                </li>
                <li>
                    <p>Company</p>
                    <ul>
                        <a href="/">About</a>
                        <a href="/">Our Team</a>
                        <a href="/">Careers</a>
                        <a href="/">Contact</a>
                    </ul>
                </li>
                <li>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-pinterest"></i>
                    <i class="fab fa-instagram"></i>
                </li>
            </ul>
            
        </WrapperFooter>
    )
}
