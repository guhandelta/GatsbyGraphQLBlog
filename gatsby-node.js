const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if(node.internal.type === "MarkdownRemark"){
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWordpressPost{
        nodes{
          slug
         }
      }
    }
  `).then(result => { // create a page for each slug received in teh forEach loop
      result.data.allWordpressPost.nodes.forEach((node) => {
        createPage({
            path: node.slug,
            component: path.resolve('./src/layouts/BlogpostLayout.js'),
            context: { // Helps retrieving the articles by the slug
                slug: node.slug
            }
        })
      })
  })
}