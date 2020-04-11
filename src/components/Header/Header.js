import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.scss";

import Menu from "./Menu";
import Content from "./Content";


const Header = ({ siteMetadata }) => (
  <header id="masthead">
    <Menu />
    <Content siteMetadata={siteMetadata} />  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
