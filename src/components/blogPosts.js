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
        <span key={post.node.id} alignItems="flex-start">
          <Typography component={"span"} gutterBottom>
            <h5>{post.node.title}</h5>
            {post.node.featured_media && (
              <Img
                fluid={post.node.featured_media.localFile.childImageSharp.fluid}
              />
            )}
          </Typography>
        </span>
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
          {displayPosts()}
          {/* <List className={classes.root}>{displayPosts()}</List> */}
        </Typography>
      </Container>
    </>
  )
}

export default BlogPosts
