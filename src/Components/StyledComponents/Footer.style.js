import styled from 'styled-components'

export const WrapperFooter = styled.footer `
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
export const LinkWrapper = styled.ul `
        display: flex;
        flex-direction: column;
    `

export const Link = styled.a `
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

export const LinkWrapperSocial = styled(LinkWrapper)
`
    flex-direction: row;
    justify-content: space-evenly;
    `

export const LinkSocial = styled(Link)
`
        font-size: ${props => props.theme.fontSize};
        margin: 0.4rem;
    `

export const Brand = styled.h1 `
        font-size: 2rem;
        font-weight: 700;
    `

export const FooterSection = styled.section `
        margin: 1rem 0rem;
    `