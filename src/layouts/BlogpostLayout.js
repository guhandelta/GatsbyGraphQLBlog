import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogpostLayout = (props) => {
    //Any HTML content entered within the <PrimaryLayout></PrimaryLayout> will be accessed through the props.children
    return (
        <div>
            <Header />            
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="">This is a Blogpost</div>
                    </div>
                </div>
            <Footer />            
        </div>
    )
}

export default BlogpostLayout;