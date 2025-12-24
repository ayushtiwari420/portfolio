import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import Page from './components/page'

function App() {
  const [themeMode, setThemeMode] = useState("dark")

  const lightTheme = () => setThemeMode("light")
  const darkTheme = () => setThemeMode("dark")

  // Actual change in the DOM
  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove("light", "dark")
    html.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Page />
    </ThemeProvider>
  )
}

export default App