import React from "react"
import { Link } from "gatsby"
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

const IndexPage = () => (
  <>
    <Header />
    <Layout>
      <SEO title="Home" />
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={7}>
          <Typography component={"span"} gutterBottom>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography component={"span"} gutterBottom>
            <BlogPosts />
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  </>
)

export default IndexPage
