import React from 'react'
import carouselImage from '../../Images/illustration-working.svg'

export default function Carousel() {
    return (
        <section>
            <section>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <a href="/">Get Started</a>
            </section>
            <img src={carouselImage} alt="Carousel Illustration"/>
        </section>
    )
}
