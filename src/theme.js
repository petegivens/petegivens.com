import React, { createContext, useState } from 'react'

export const ThemeContext = createContext('default')

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
