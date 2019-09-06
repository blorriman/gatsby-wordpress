import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import { IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { purple } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  header: {
    paddingBottom: theme.spacing(0.25),
    // marginBottom: theme.spacing(2),
    margin: 0,
    backgroundColor: purple[500],
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    textDecoration: "none",
    color: "white",
  },
}))

const Header = props => {
  const { handleDrawerOpen } = props
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={classes.header}>
      <Toolbar>
        <IconButton
          color="secondary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerOpen}
          className={classes.menuButton}
        >
          <Icon path={mdiMenu} title="menu" size={1} color="white" />
        </IconButton>
        <Typography component="h1" color="secondary" variant="h5" noWrap>
          <Link className={classes.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </Typography>
      </Toolbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
