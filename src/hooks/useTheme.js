import { useContext } from 'react'
import { ThemeContext } from '../theme'

const themeList = ['default', 'theme2']

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeTheme = newTheme => {
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    setTheme(newTheme)
  }

  return {
    setTheme: changeTheme,
    theme,
    themeList,
  }
}
