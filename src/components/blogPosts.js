/* eslint-disable */
import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({}))

const BlogPosts = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
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
  `)

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
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography component={"span"} gutterBottom>
          <Box fontSize="h6.fontSize" textAlign="center" m={1}>
            Recent Posts
          </Box>
          <ul>{displayPosts()}</ul>
        </Typography>
      </Container>
    </>
  )
}

export default BlogPosts
