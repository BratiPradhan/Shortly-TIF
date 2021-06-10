import styled from 'styled-components'

export const WrapperStatistics = styled.article`
grid-column: 2 / -2;
text-align: center;

@media only screen and (max-width: 375px){
    grid-column: 1 / -2;
}

`
export const StatisticHeader = styled.h1`
font-size: 2rem;
color: ${props => props.theme.neutral.veryDarkViolet};
font-weight: 700;

@media only screen and (max-width: 375px){
    font-size: ${props => props.theme.fontSize};
}
`
export const StatisticIntro = styled.p`
        font-size: ${props => props.theme.fontSize};
color: ${props => props.theme.neutral.grayishViolet};
font-weight: 700;

@media only screen and (max-width: 375px){
    font-size: 1rem;
}
`
export const CardsWrapper = styled.section`
display: flex;
justify-content: space-evenly;
margin: 4rem;

@media only screen and (max-width: 375px){
    flex-direction: column;
    margin: 0.2rem;
}
`

export const Card = styled.section`
background-color: ${props => props.theme.neutral.lighGray};
padding:  3rem;
position: relative;
margin: 1rem;
`

export const CardHeader = styled.h2`
font-size: ${props => props.theme.fontSize};
font-weight: 700;
color: ${props => props.theme.neutral.veryDarkViolet};
`

export const CardContent = styled.p`
font-size: 1rem;
color: ${props => props.theme.neutral.grayishViolet};
`

export const CardBadge = styled.img`
border-radius: 50%;
position: absolute;
left: 7rem;
top: -2rem;
width: 6vw;
height:10vh ;
background-color: ${props => props.theme.primary.darkViolet};
background-size: contain;

@media only screen and (max-width: 375px){
    width: 12vw;
    top: -1rem;
}
`