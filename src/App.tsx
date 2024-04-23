import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/global"
import { Todos } from "./pages/Todos"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Todos />
    </ThemeProvider>
  )
}

export default App
