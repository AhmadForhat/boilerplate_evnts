import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({theme}) => theme.font.body.family}
  }
`
export default GlobalStyle
