import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'
import theme from './'

const globalRules = `
  html {
    box-sizing: border-box;
  }
  body {
    background: ${theme.colors.pageBackground};
    color: ${theme.textColors.text};
    background-image: linear-gradient(
      to left bottom,
      #d02018,
      #d5003f,
      #cd0064,
      #b70087,
      #901ca7,
      #7a29aa,
      #6232aa,
      #4637a9,
      #522f95,
      #572982,
      #582470,
      #552060
    );
    background-attachment: fixed;
    background-size: cover;
    line-height: 1.75;
    width: 100vw;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  /* Headings and text styles */
  h1 {
    font-size: 62px;
    font-weight: ${theme.fontWeights.bold};
    font-family: ${theme.fontFamilies.headings};
    letter-spacing: -1.8px;
    line-height: 1em;
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 24px;
    font-weight: ${theme.fontWeights.medium};
    font-family: ${theme.fontFamilies.headings};
    letter-spacing: 0.2;
    line-height: 1.5em;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 20px;
    font-weight: ${theme.fontWeights.medium};
    letter-spacing: 0.2;
    line-height: 24px;
  }

  h4 {
    font-size: 18px;
    font-weight: ${theme.fontWeights.bold};
    letter-spacing: 0.2;
    line-height: 22px;
  }

  h5 {
    font-size: 12px;
    font-weight: ${theme.fontWeights.regular};
    letter-spacing: 0.2;
    margin: 0;
  }

  p {
    font-size: 20px;
    font-weight: ${theme.fontWeights.light};
    line-height: 1.5em;
    letter-spacing: 0.5px;
    font-weight: 300;
    color: ${theme.colors.darkGrey};
  }

  a {
    color: ${theme.textColors.link};
    text-decoration: none;
    cursor: pointer;
    transition: color .2s ease-out;

    &:hover {
      color: ${theme.textColors.hover};
      text-decoration: none;
    }
  }

  ul {
    margin: 10px 0;
    padding: 0;

    li {
      font-weight: ${theme.fontWeights.light};
      margin: 10px 20px;
    }
  }

  strong {
    font-weight: ${theme.fontWeights.bold};
  }
`

const GlobalStyle = createGlobalStyle`${normalize} ${globalRules}`

export default GlobalStyle
