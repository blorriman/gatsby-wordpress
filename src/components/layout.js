import React, { useState } from "react"
import PropTypes from "prop-types"
import { Location } from "@reach/router"
import { Link, StaticQuery, graphql } from "gatsby"
import {
  AppBar,
  Container,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  makeStyles,
} from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import HomeIcon from "@material-ui/icons/Home"
import "./layout.css"

import Header from "./header"
import Footer from "./footer"
import BlogPosts from "./blogPosts"

const drawerWidth = 240

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
    minHeight: "calc(100vh - 67px) ",
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),
  },
  toolbar: theme.mixins.toolbar,
  appBar: {
    boxShadow: theme.shadows[1],
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    /* padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar, */
    justifyContent: "space-between",
    // justifyContent: "flex-end",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: grey[200],
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  mobileDivider: {
    marginBottom: theme.spacing(2),
  },
}))

const Layout = ({ children, location }) => {
  console.log("layout ", location)
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  function handleDrawerOpen() {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery1 {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>
          <AppBar position="fixed" className={classes.appBar}>
            <Header
              siteTitle={data.site.siteMetadata.title}
              handleDrawerOpen={handleDrawerOpen}
              handleDrawerClose={handleDrawerClose}
            />
          </AppBar>
          <Container component="main" className={classes.main} maxWidth="md">
            <div className={classes.toolbar} />
            <main>
              <Drawer
                variant="temporary"
                open={open}
                onClose={handleDrawerOpen}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <Hidden smUp>
                  <div className={classes.drawerHeader}>
                    <Link to="/">
                      <IconButton>
                        <HomeIcon />
                      </IconButton>
                    </Link>

                    <IconButton onClick={handleDrawerClose}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </div>
                  <Divider className={classes.mobileDivider} />
                </Hidden>
                <BlogPosts />
              </Drawer>
              {children}
            </main>
          </Container>
          <Footer />
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
