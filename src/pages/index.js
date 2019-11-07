import React from "react"
import { graphql } from 'gatsby'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Post from '../components/Post'
import { Helmet } from 'react-helmet'; // Helps control header content and here it will help add <meta> in the header

export default ({data}) => {// The data returned by the graphql query, in the props, is obtanied directly by destructurizing the props
    console.log(data); // Console log the data
    return( // Render the component
        <PrimaryLayout column='col-xs-6'>
          {data.allWordpressPost.nodes.map(node =>(
            <Post 
              image={node.featured_media.source_url} 
              title={node.title} 
              excerpt={node.excerpt} 
              readMore={node.slug}
            />
          ))}
        </PrimaryLayout>        
    );
}
// This query will be added to the props of the component
export const query = graphql`
{
  allWordpressPost{
    nodes{
      slug
      title
      excerpt
      featured_media{
        source_url
      }
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

/*
  <Helmet>
      <title>Wordpress sourced Gatsby Blog</title>
      <meta name="description" content="This a blog designed using Gatsby with wordpress powered content" />
      <meta name="keywords" content="gatsby, gatsby react, gatsby bootstrap, gatsby project, gatsby blog" />
      <meta name="robots" content="index,follow" />
  </Helmet>
  */
  