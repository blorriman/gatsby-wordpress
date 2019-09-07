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

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      gatsby: file(relativePath: { eq: "Gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsbyIcon: file(relativePath: { eq: "gatsby-icon.png" }) {
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
      wordpressIcon: file(relativePath: { eq: "wordpress-icon.png" }) {
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
      netlifyIcon: file(relativePath: { eq: "netlify-icon.png" }) {
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
          <Hidden xsDown>
            <Img fluid={data.gatsby.childImageSharp.fluid} />
          </Hidden>
          <Hidden smUp>
            <Img fluid={data.gatsbyIcon.childImageSharp.fluid} />
          </Hidden>
        </Grid>

        <Grid item xs={4}>
          <Hidden xsDown>
            <Img fluid={data.wordpress.childImageSharp.fluid} />
          </Hidden>
          <Hidden smUp>
            <Img fluid={data.wordpressIcon.childImageSharp.fluid} />
          </Hidden>
        </Grid>

        <Grid item xs={4}>
          <Hidden xsDown>
            <Img fluid={data.netlify.childImageSharp.fluid} />
          </Hidden>
          <Hidden smUp>
            <Img fluid={data.netlifyIcon.childImageSharp.fluid} />
          </Hidden>
        </Grid>
      </Grid>
    )
  }

  return (
    <>
      <Layout location={location}>
        <SEO title="Home" />
        <Grow in={true} timeout={800}>
          <Grid container spacing={12} spacing={6}>
            <Grid item xs={12} sm={8}>
              <Typography component={"span"} gutterBottom>
                <h1>Welcome!</h1>
                <p>
                  This is a demo of a blog website built with Gatsby frontend,
                  Wordpress headless CMS, and deployed on Netlify as a static
                  site (PWA).
                </p>
              </Typography>
              <ImageRow />
              <Typography component={"span"} gutterBottom>
                <p>
                  Blog posts can be added through{" "}
                  <a href="https://www.webrenovations.ca/" target="_blank">
                    Wordpress
                  </a>{" "}
                  and once published they are automatically deployed to Netlify
                  which conducts an automatic build of the static Gatsby site.
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
