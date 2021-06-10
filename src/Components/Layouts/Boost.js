import React from 'react'
import { WrapperBoost, BoostHeader, GetStarted  } from '../StyledComponents/Boost.style'

export default function Boost() {

    return (
        <WrapperBoost>
            <BoostHeader>Boost your links today</BoostHeader>
            <GetStarted href="/src/Components/Layouts/Home.js">Get Started</GetStarted>
        </WrapperBoost>
    )
}
