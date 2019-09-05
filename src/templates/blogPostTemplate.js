import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      />
      <Typography component={"span"} gutterBottom>
        <h1>{data.wordpressPost.title}</h1>
        <p>
          Written by {data.wordpressPost.author.name} on{" "}
          {data.wordpressPost.date}
        </p>
        <p>put image here</p>
        {data.wordpressPost.featured_media && (
          <Img
            fluid={
              data.wordpressPost.featured_media.localFile.childImageSharp.fluid
            }
            alt={data.wordpressPost.title}
            style={{ width: 250 }}
          />
        )}
        <div
          style={{ marginTop: 20 }}
          dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
        />
      </Typography>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
    }
  }
`
