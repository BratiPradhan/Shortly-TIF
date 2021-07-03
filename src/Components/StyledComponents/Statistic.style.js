import styled from 'styled-components'

export const WrapperStatistics = styled.article`
grid-column: 2 / -2;
text-align: center;
margin: auto;

@media only screen and (max-width: 600px){
    /* grid-column: 1 / -2; */
    /* max-width: 450px; */
    /* font-size: 0.8rem; */
}

`
export const StatisticHeader = styled.h1`
font-size: 2rem;
color: ${props => props.theme.neutral.veryDarkViolet};
font-weight: 700;
margin: 0;

@media only screen and (max-width: 600px){
    font-size: 1.4rem;
}
`
export const StatisticIntro = styled.p`
        font-size: 1rem;
color: ${props => props.theme.neutral.grayishViolet};
/* font-weight: 500; */
max-width: 450px;
margin: auto;



@media only screen and (max-width: 600px){
    font-size: 0.8rem;
    /* max-width: 300px; */
}
`
export const CardsWrapper = styled.section`
display: grid;
grid-template-columns: repeat(9, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 1rem;
/* justify-content: space-evenly; */
margin: 5rem 0rem;

@media only screen and (max-width: 600px){
    /* max-height: 50%; */
    /* flex-direction: column; */
grid-template-rows: repeat(3, 1fr);
    /* margin: 5rem 0rem 0rem; */
    /* grid-auto-rows: auto; */
    grid-row-gap: 5rem;
    grid-column-gap: 0;
    /* grid-auto-columns: auto; */
}
`

export const Card = styled.section`
background-color: ${props => props.theme.neutral.lightGray};
padding:  3rem;
position: relative;
/* margin: 1rem; */
/* grid-column: 1 / -1; */
text-align: left;
display: flex;
flex-direction: column;
flex-wrap: wrap;

@media only screen and (max-width: 600px) {
    text-align: center;
}


`

export const CardBrandRecognition = styled(Card)`
grid-column: 1 / 4;
grid-row: 1 / 3;

@media only screen and (max-width: 600px){
    grid-column: 1 / -1;
    grid-row: 1 / 2 ;
}
`

export const CardDetailedRecord = styled(Card)`
grid-row:  2 / 4;
grid-column: 4 / 7;

@media only screen and (max-width: 600px){
    grid-column: 1 / -1;
    grid-row: 2 / 3;
}
`
export const CardFullyCustomizable = styled(Card)`
grid-row: 3 / -1;
grid-column: 7 / -1 ;

@media only screen and (max-width: 600px){
    grid-column: 1 / -1;
    grid-row: 3 / -1;
    /* grid-row-gap: 0rem; */
}
`

export const CardHeader = styled.h2`
font-size: ${props => props.theme.fontSize};
font-weight: 700;
color: ${props => props.theme.neutral.veryDarkViolet};
`

export const CardContent = styled.p`
font-size: 1rem;
color: ${props => props.theme.neutral.grayishViolet};

@media only screen and (max-width: 600px){
    font-size: 0.8rem;
    /* max-width: 300px; */
}
`

export const CardBadgeWrapper = styled.div`
border-radius: 50%;
position: absolute;
left: 2rem;
top: -2rem;
width: 70px ;
height: 70px;
background-color: ${props => props.theme.primary.darkViolet};
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 600px){
    left: 40%;
}
`

export const CardBadge = styled.img`
/* border-radius: 50%; */
/* position: absolute;
left: 7rem;
top: -2rem; */
/* width: 6vw;
height:10vh ; */
width: 32px;
height:32px ;
background-color: ${props => props.theme.primary.darkViolet};
/* background-size: contain; */

@media only screen and (max-width: 600px){
    /* width: 12vw; */
    /* top: -1rem; */
}
`