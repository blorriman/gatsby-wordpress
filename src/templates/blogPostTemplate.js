import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  console.log(data.wordpressPost.content)
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      />
      <h1>{data.wordpressPost.title}</h1>
      <p>
        Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
      </p>
      {/* <Img
        fluid={
          data.wordpressPost.featured_media.localFile.childImageSharp.fluid
        }
        // sizes={
        //   data.wordpressPost.featured_media.localFile.childImageSharp.fluid
        // }
        alt={data.wordpressPost.title}
        // style={{ maxHeight: 450 }}
      /> */}
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
      />
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
    }
  }
`
