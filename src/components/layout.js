/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
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

import Footer from "./footer"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  "@global": {
    html: {
      [theme.breakpoints.up("xs")]: {
        fontSize: 14,
      },
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 157px) ",
    // minHeight: "calc(100vh - 75px) ",
    // background: `linear-gradient(to bottom, ${grey[100]} 0%, ${
    //   grey[200]
    // } 100%)`,
    // paddingBottom: theme.spacing(5),
  },
  toolbar: theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <Grow in={true} timeout={800}>
      <div>
        <Container component="main" className={classes.main} maxWidth="md">
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    </Grow>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
