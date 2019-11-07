import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const SEO = () => {
    return (
        <div>
            <StaticQuery 
                query={query}
                render={({
                    site:{
                        siteMetadata:{
                            defaultTitle,
                            defaultDescription,
                            defaultImage,
                            url,
                            keywords
                        }
                    }
                }) => {
                    const seo = {
                        title: defaultTitle,
                        description: defaultDescription,
                        image: `${url}${defaultImage}`
                    }
                    return(
                        <div>
                            
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default SEO

// Variables can't be used in a static query, as used in BlogpostLayout[]query($slug: String!)
const query = graphql`
    {
        site{
            siteMetadata{
                defaultTitle: title
                defaultDescription: description
                defaultImage: image
                url
                keywords
            }
        }
    }
    
`