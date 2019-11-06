import React from "react"
import { graphql } from 'gatsby'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Post from '../components/Post'

export default ({data}) => {// The data returned by the graphql query, in the props, is obtanied directly by destructurizing the props
    console.log(data); // Console log the data
    return( // Render the component
        <PrimaryLayout column='col-xs-6'>
            <Post 
                title="First Blogpost" 
                excerpt="Gatsby is a blazing fast modern site generator for React. The quick start is intended for intermediate to advanced developers. For a gentler intro to Gatsby, head to our tutorial!" 
            />
        </PrimaryLayout>        
    );
}
// This query will be added to the props of the component
export const query = graphql`
{
    allMarkdownRemark{
      nodes{
        frontmatter{
          title
          date
          keywords
          image
        }
        excerpt
        html
      }
    }
  }
`
