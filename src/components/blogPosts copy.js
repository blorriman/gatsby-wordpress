/* eslint-disable */
import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}))

const BlogPosts = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      posts: allWordpressPost {
        edges {
          node {
            id
            slug
            excerpt
            title
            featured_media {
              localFile {
                childImageSharp {
                  fluid {
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.posts.edges

  const displayPosts = () => {
    return posts.map(post => {
      /* if (post.node.featured_media) {
        console.log(
          "image ",
          post.node.featured_media.localFile.childImageSharp.fluid.srcSet
        )
      } */
      return (
        <span key={post.node.id}>
          <Container component="main" className={classes.main} maxWidth="md">
            <Grid item xs={12}>
              <Grid item xs={3}>
                <div style={{ backgroundColor: "red", padding: 20 }} />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle1" gutterBottom>
                  {post.node.title}
                </Typography>
                <div style={{ backgroundColor: "yellow", padding: 20 }} />
              </Grid>
              {post.node.featured_media && (
                <Img
                  fluid={
                    post.node.featured_media.localFile.childImageSharp.fluid
                  }
                />
              )}
            </Grid>
          </Container>
        </span>
      )
    })
  }

  return (
    <>
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h5" align="center" gutterBottom>
          Recent Posts
        </Typography>
        {displayPosts()}
      </Container>
    </>
  )
}

export default BlogPosts
