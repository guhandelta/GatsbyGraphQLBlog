import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEO = ({title, description, defaultKeywords, image}) => {
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
                        title: title || defaultTitle,
                        description: description || defaultDescription,
                        image: `${url}${image || defaultImage}`,
                        keywords: keywords || defaultKeywords
                    }
                    return(
                        <div>
                            <Helmet>
                                <title>{seo.title}</title>
                                <meta name="image" content={seo.image} />
                                <meta name="description" content={seo.description} />
                                <meta name="keywords" content={seo.keywords} />
                                <meta name="robots" content="index,follow" />
                            </Helmet>

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
                defaultKeywords: keywords
            }
        }
    }
    
`
/*
   Providing index, follow in teh content of the meta tags, with the name robots, it is actually instructcting the search engine crawlers to crawal teh page for content and -
   - index the page in the related search results for any search done 

   follow => instructing the search engine crawler whether to use/follow the links on the page -> the crawlers will link SEO Juice to the resulting page for the links -> this-
   kidof adds more seo power/optimization to the page
*/