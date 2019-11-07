import React from "react"
import { graphql } from 'gatsby'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Post from '../components/Post'

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
