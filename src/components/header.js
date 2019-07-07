import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '../hooks/useTheme'
import './header.css'

const Header = ({ siteTitle }) => {
  const { theme, themeList, setTheme } = useTheme()
  return (
    <header>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        {themeList.map(theme => (
          <option value={theme}>{theme}</option>
        ))}
      </select>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
