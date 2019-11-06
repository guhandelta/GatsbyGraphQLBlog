import React from "react"
import PrimaryLayout from '../layouts/PrimaryLayout'
import Post from '../components/Post'

export default () => (
    
    <PrimaryLayout column='col-xs-6'>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-xs-6"> 
                    <Post 
                        title="First Blogpost" 
                        excerpt="Gatsby is a blazing fast modern site generator for React. The quick start is intended for intermediate to advanced developers. For a gentler intro to Gatsby, head to our tutorial!" 
                    />
                    <Post 
                        title="First Blogpost" 
                        excerpt="Gatsby is a blazing fast modern site generator for React. The quick start is intended for intermediate to advanced developers. For a gentler intro to Gatsby, head to our tutorial!" 
                    />
                    <Post 
                        title="First Blogpost" 
                        excerpt="Gatsby is a blazing fast modern site generator for React. The quick start is intended for intermediate to advanced developers. For a gentler intro to Gatsby, head to our tutorial!" 
                    />
                </div>
            </div>
        </div>
    </PrimaryLayout>
        
);
