import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PrimaryLayout = (props) => {
    //Any HTML content entered within the <PrimaryLayout></PrimaryLayout> will be accessed through the props.children
    return (
        <div>
            <Header />            
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className={props.column}>
                            {props.children} 
                        </div>
                    </div>
                </div>
            <Footer />            
        </div>
    )
}

export default PrimaryLayout;