import React from 'react'
import { ThemeProvider } from 'styled-components'

import { themes as getThemes } from '@ahmadevnts/design-system'

const ThemesProviderUi = ({children}) => {
  return (
    <ThemeProvider theme={getThemes()}>
      {children}
    </ThemeProvider>
  )
}

export default ThemesProviderUi
