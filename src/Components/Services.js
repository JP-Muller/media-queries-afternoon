import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className='services-section'>
                <header className='services-header'>
                <h2>SERVICES</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                </header>
                <section className='services-display'>
                <div className='services-div'>
                    <h4>E-Commerce</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className='services-div'>
                    <h4>Responsive Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className='services-div'>
                    <h4>Web Security</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                </section>
            </div>
        )
    }
}

export default Services
