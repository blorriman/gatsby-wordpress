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
      /* console.log(
        "image ",
        post.node.featured_media.localFile.childImageSharp.fluid.srcSet
      ) */
      return (
        <ListItem key={post.node.id} alignItems="flex-start">
          <ListItemText
            primary={post.node.title}
            secondary={
              <span>
                <Typography component="span" variant="body2">
                  <span
                    dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                  />
                </Typography>
              </span>
            }
          />
        </ListItem>
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
          <List className={classes.root}>{displayPosts()}</List>
        </Typography>
      </Container>
    </>
  )
}

export default BlogPosts
