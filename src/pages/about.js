import React from 'react'
import PrimaryLayout from '../layouts/PrimaryLayout'

const About = () => {
    return (
        <PrimaryLayout column='col-xs-6'>
            <h1>About Page</h1>
            <span>
                <p> This blog is created using Gatsby JS to post some awesome content</p>
            </span>
        </PrimaryLayout>
    )
}

export default About;