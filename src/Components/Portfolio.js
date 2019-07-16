import React, { Component } from 'react'

export class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio-parent'>
                <header className='portfolio-header'>
                    <h2>PORTFOLIO</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </header>
                <section className='portfolio-div-container'>
                    <div>
                        <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-full.jpg' alt='' />
                        <h3>Threads</h3>
                        <p>Illustration</p>
                    </div>
                    <div>
                        <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-full.jpg' alt='' />
                        <h3>Explore</h3>
                        <p>Graphic Design</p>
                    </div>
                    <div>
                        <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-full.jpg' alt='' />
                        <h3>Finish</h3>
                        <p>Identity</p>
                    </div>
                    <div>
                        <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-full.jpg' alt='' />
                        <h3>Lines</h3>
                        <p>Branding</p>
                    </div>
                    <div>
                        <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-full.jpg' alt='' />
                        <h3>Southwest</h3>
                        <p>Website Design</p>
                    </div>
                    <div>
                        <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-full.jpg' alt='' />
                        <h3>Window</h3>
                        <p>Photography</p>
                    </div>
                </section>

            </div>
        )
    }
}

export default Portfolio
