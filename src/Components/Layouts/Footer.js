import React from 'react'
import styled from 'styled-components'
import brandLogo from '../../Images/logo.svg'


export default function Footer() {

    const WrapperFooter = styled.footer`
        grid-column: 1 / -1;
        background-color: ${props => props.theme.neutral.veryDarkViolet};
        display: flex;
        justify-content: space-evenly;
        color: white;
    `
    const LinkWrapper = styled.ul`
        display: flex;
        flex-direction: column;
    `

    const Link = styled.a`
        margin: 0.2rem 0rem ;
        text-decoration: none;
        color: white;
        font-size: 1rem;
        &:hover{
            color: ${props => props.theme.primary.cyan };
        }
    `

    const LinkWrapperSocial = styled(LinkWrapper)`
    flex-direction: row;
    justify-content: space-evenly;
    `

    const LinkSocial = styled(Link)`
        font-size: ${props => props.theme.fontSize};
        margin: 0.4rem;
    `

    const Brand = styled.h1`
        font-size: 2rem;
        font-weight: 700;
    `

    const FooterSection = styled.section`
        margin: 1rem 0rem;
    `

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
                        <LinkSocial href="/"><i class="fab fa-facebook-square"></i></LinkSocial> 
                        <LinkSocial href="/"> <i class="fab fa-twitter"></i></LinkSocial>
                        <LinkSocial href="/"><i class="fab fa-pinterest"></i></LinkSocial>
                        <LinkSocial href="/"><i class="fab fa-instagram"></i></LinkSocial>
                    </LinkWrapperSocial>
                    
                </FooterSection>
        </WrapperFooter>
    )
}
