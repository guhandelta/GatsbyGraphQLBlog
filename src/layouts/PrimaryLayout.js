import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const PrimaryLayout = (props) => {
    //Any HTML content entered within the <PrimaryLayout></PrimaryLayout> will be accessed through the props.children

    // THe <SEO /> will use all the content mentioned with the <mets> in the SEO component
    return (
        <div>
            <SEO />
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