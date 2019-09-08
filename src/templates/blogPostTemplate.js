import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Button,
  Container,
  Divider,
  Grid,
  Grow,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import BlogPosts from "../components/blogPosts"
import { mergeClasses } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  dateText: {
    fontSize: ".85em",
    color: grey[500],
  },
}))

const BlogPostTemplate = ({ data, location }) => {
  const classes = useStyles()
  let pathname
  if (location) {
    pathname = location.pathname
  }
  return (
    <>
      <Layout location={location}>
        <SEO
          title={data.wordpressPost.title}
          description={data.wordpressPost.excerpt}
        />
        <Grow in={true} timeout={800}>
          <Grid container spacing={12} spacing={6}>
            <Grid item xs={12} sm={8}>
              {data.wordpressPost.featured_media && (
                <Img
                  fluid={
                    data.wordpressPost.featured_media.localFile.childImageSharp
                      .fluid
                  }
                  alt={data.wordpressPost.title}
                  style={{ maxWidth: 600 }}
                />
              )}
              <Typography component={"span"} gutterBottom>
                <h1>{data.wordpressPost.title}</h1>
                <p className={classes.dateText}>
                  Written by {data.wordpressPost.author.name} on{" "}
                  {data.wordpressPost.date}
                </p>
                <div
                  style={{ marginTop: 20 }}
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressPost.content,
                  }}
                />
              </Typography>
            </Grid>

            <Hidden xsDown>
              <Grid item xs={12} sm={4}>
                <BlogPosts pathname={pathname} />
              </Grid>
            </Hidden>
          </Grid>
        </Grow>
      </Layout>
    </>
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
