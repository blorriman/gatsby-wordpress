/* eslint-disable */
import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  textInfo: {
    fontSize: ".85em",
    marginTop: -5,
    marginBottom: -5,
    color: grey[500],
  },
  link: {
    textDecoration: "none",
    color: grey[700],
    "&:hover": {
      backgroundColor: grey[300],
    },
  },
  linkDiv: {
    "&:hover": {
      backgroundColor: grey[200],
    },
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
            content
            title
            author {
              name
            }
            date
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
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
      return (
        <Link
          to={`/post/${post.node.slug}`}
          key={post.node.id}
          className={classes.link}
        >
          <div className={classes.linkDiv}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={2}>
                {post.node.featured_media && (
                  <Img
                    fluid={
                      post.node.featured_media.localFile.childImageSharp.fluid
                    }
                  />
                )}
              </Grid>
              <Grid item xs={9}>
                <Typography variant="subtitle1">{post.node.title}</Typography>
                <Typography component={"span"} noWrap>
                  <p className={classes.textInfo}>
                    <em>
                      {post.node.author.name} -{" "}
                      {moment(post.node.date).fromNow()}
                    </em>
                  </p>
                </Typography>
              </Grid>
            </Grid>
          </div>
          <Divider style={{ margin: 10 }} />
        </Link>
      )
    })
  }

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Recent Posts
        <Divider />
      </Typography>
      {displayPosts()}
    </>
  )
}

export default BlogPosts
