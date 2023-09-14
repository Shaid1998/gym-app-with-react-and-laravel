
import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

class JoinToday extends Component {
    render() {
        return (
            <Fragment>
                <div className='JoinT'>
                    <div className='JoinClass'>
                        <h1 className='JoinTitle'>JOIN TODAY</h1>
                        <button className='btn btn-primary btn-block ButtonSet' size="lg">JOIN YOUR JUARNEY</button>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.291100011103!2d88.44166617488192!3d22.266956144103982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026b8946c67695%3A0x94978cd7b4e9d21c!2sBaruipur%20-%20Kulpi%20Rd%2C%20Sarberia%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sbd!4v1694432335920!5m2!1sen!2sbd" width="100%" height="350" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </Fragment> 
        )
    }
}

export default JoinToday