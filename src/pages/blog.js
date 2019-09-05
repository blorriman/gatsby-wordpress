/* eslint-disable */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  paragraph: {
    ...theme.typography.body1,
  },
}))

const Blog = ({ data }) => {
  const classes = useStyles()

  const posts = data.posts.edges

  const displayPosts = () => {
    return posts.map(post => {
      return (
        <li key={post.node.slug}>
          <Link to={`/post/${post.node.slug}`}>{post.node.title}</Link>
        </li>
      )
    })
  }

  return (
    <>
      <Header />
      <Layout>
        <Container component="main" className={classes.main} maxWidth="md">
          <SEO title="Blog" />
          <Typography component="div">
            <Box fontSize="h4.fontSize" textAlign="center" m={1}>
              Blog Page
            </Box>
            <ul>{displayPosts()}</ul>
          </Typography>
        </Container>
      </Layout>
    </>
  )
}

export default Blog

export const query = graphql`
  query {
    posts: allWordpressPost {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`
