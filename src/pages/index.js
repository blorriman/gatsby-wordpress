import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import BlogPosts from "../components/blogPosts"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      gatsby: file(relativePath: { eq: "Gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wordpress: file(relativePath: { eq: "Wordpress.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      netlify: file(relativePath: { eq: "Netlify.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  function ImageRow() {
    return (
      <Grid
        container
        spacing={4}
        alignItems="center"
        style={{ marginBottom: 25 }}
      >
        <Grid item xs={4}>
          <Img fluid={data.gatsby.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={4}>
          <Img fluid={data.wordpress.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={4}>
          <Img fluid={data.netlify.childImageSharp.fluid} />
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Grow in={true} timeout={800}>
          <Grid container spacing={12} spacing={6}>
            <Grid item xs={12} sm={8}>
              <Typography component={"span"} gutterBottom>
                <h1>Welcome!</h1>
                <p>
                  This is a demo of a blog website built with Gatsby frontend,
                  Wordpress as a headless CMS, and deployed with Netlify as a
                  CDN.
                </p>
              </Typography>
              <ImageRow />
              <Typography component={"span"} gutterBottom>
                <p>
                  Blog posts can be added through Wordpress and once published
                  they are automatically deployed to Netlify which conducts an
                  automatic build of the static Gatsby site.
                </p>
              </Typography>
            </Grid>

            <Hidden xsDown>
              <Grid item xs={12} sm={4}>
                <BlogPosts />
              </Grid>
            </Hidden>
          </Grid>
        </Grow>
      </Layout>
    </>
  )
}

export default IndexPage
