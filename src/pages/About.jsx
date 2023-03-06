import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/shared/Card'

function About() {
  return (
    <Card>
        <div className='about'>
            <h1>About this FeedBack App</h1>
            <p>this is a simple react feedback App</p>
        
            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About