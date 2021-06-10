import React from 'react'
import styled from 'styled-components'


export default function Footer() {

    const WrapperFooter = styled.footer`
        grid-column: 1 / -1;
        background-color: ${props => props.theme.neutral.veryDarkViolet};
        display: flex;
        justify-content: space-evenly;
        color: white;

        @media only screen and (max-width: 375px) {
            flex-direction: column;
            align-items: center;
  }
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

        @media only screen and (max-width: 375px) {
            font-size: 0.8rem;
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
                        <LinkSocial href="/src/Components/Layouts/Home.js"><i class="fab fa-facebook-square"></i></LinkSocial> 
                        <LinkSocial href="/src/Components/Layouts/Home.js"> <i class="fab fa-twitter"></i></LinkSocial>
                        <LinkSocial href="/src/Components/Layouts/Home.js"><i class="fab fa-pinterest"></i></LinkSocial>
                        <LinkSocial href="/src/Components/Layouts/Home.js"><i class="fab fa-instagram"></i></LinkSocial>
                    </LinkWrapperSocial>
                    
                </FooterSection>
        </WrapperFooter>
    )
}
