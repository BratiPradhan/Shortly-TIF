import React from 'react'
import { WrapperFooter, Brand, FooterSection, Link, LinkSocial, LinkWrapper, LinkWrapperSocial } from '../StyledComponents/Footer.style'


export default function Footer() {



    return (
        <WrapperFooter>
                <section>
                    <Brand>Shortly</Brand>
                </section>
                <FooterSection>
                    <p>Features</p>
                    <LinkWrapper>
                        <Link href="/src/Components/Layouts/Home.js">Link Shortening</Link>
                        <Link href="/src/Components/Layouts/Home.js">Branded Links</Link>
                        <Link href="/src/Components/Layouts/Home.js">Analytics</Link>
                    </LinkWrapper>
                </FooterSection>
                <FooterSection>
                    <p>Resources</p>
                    <LinkWrapper>
                        <Link href="/src/Components/Layouts/Home.js">Blog</Link>
                        <Link href="/src/Components/Layouts/Home.js">Developers</Link>
                        <Link href="/src/Components/Layouts/Home.js">Support</Link>
                    </LinkWrapper>
                </FooterSection>
                <FooterSection>
                    <p>Company</p>
                    <LinkWrapper>
                        <Link href="/src/Components/Layouts/Home.js">About</Link>
                        <Link href="/src/Components/Layouts/Home.js">Our Team</Link>
                        <Link href="/src/Components/Layouts/Home.js">Careers</Link>
                        <Link href="/src/Components/Layouts/Home.js">Contact</Link>
                    </LinkWrapper>
                </FooterSection>
                <FooterSection>
                    <LinkWrapperSocial>
                        <LinkSocial href="/src/Components/Layouts/Home.js"><i className="fab fa-facebook-square"></i></LinkSocial> 
                        <LinkSocial href="/src/Components/Layouts/Home.js"> <i className="fab fa-twitter"></i></LinkSocial>
                        <LinkSocial href="/src/Components/Layouts/Home.js"><i className="fab fa-pinterest"></i></LinkSocial>
                        <LinkSocial href="/src/Components/Layouts/Home.js"><i className="fab fa-instagram"></i></LinkSocial>
                    </LinkWrapperSocial>
                    
                </FooterSection>
        </WrapperFooter>
    )
}
