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
                        <Link href="/">Link Shortening</Link>
                        <Link href="/">Branded Links</Link>
                        <Link href="/">Analytics</Link>
                    </LinkWrapper>
                </FooterSection>
                <FooterSection>
                    <p>Resources</p>
                    <LinkWrapper>
                        <Link href="/">Blog</Link>
                        <Link href="/">Developers</Link>
                        <Link href="/">Support</Link>
                    </LinkWrapper>
                </FooterSection>
                <FooterSection>
                    <p>Company</p>
                    <LinkWrapper>
                        <Link href="/">About</Link>
                        <Link href="/">Our Team</Link>
                        <Link href="/">Careers</Link>
                        <Link href="/">Contact</Link>
                    </LinkWrapper>
                </FooterSection>
                <FooterSection>
                    <LinkWrapperSocial>
                        <LinkSocial href="/"><i className="fab fa-facebook-square"></i></LinkSocial> 
                        <LinkSocial href="/"> <i className="fab fa-twitter"></i></LinkSocial>
                        <LinkSocial href="/"><i className="fab fa-pinterest"></i></LinkSocial>
                        <LinkSocial href="/"><i className="fab fa-instagram"></i></LinkSocial>
                    </LinkWrapperSocial>
                    
                </FooterSection>
        </WrapperFooter>
    )
}
