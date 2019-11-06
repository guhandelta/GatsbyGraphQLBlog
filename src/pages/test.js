import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'

const Test = () => {
    return (
        <div>
            <Header title="Test Page"></Header>
            <h1>Test Page</h1>
            <Link to='/'>Back Home</Link>
        </div>
    )
}
export default Test;