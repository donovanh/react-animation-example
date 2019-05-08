const breakpoints = {
  desktop: '(min-width: 768px)'
}

const colors = {
  blue: '#107090',
  red: '#CA3C25',
  green: '#7FB069',
  orange: '#E6AA68',
  black: '#1D1A05',
  pageBackground: '#eee',
  contentBackground: '#fff',
  highlight: '#fdfd96'
}

const buttonColors = {
  primary: colors.blue,
  secondary: colors.green
}

const textColors = {
  text: colors.black,
  lightText: colors.contentBackground,
  link: colors.blue,
  hover: colors.green
}

const fontFamilies = {
  default:
    '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
  headings: 'Playfair Display, serif'
}

const fontWeights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900
}

const maxContainerWidth = '1080px'

const borderRadius = '6px'

const boxShadow = '10px 10px 40px rgba(0, 0, 0, 0.2)'

const theme = {
  boxShadow,
  breakpoints,
  buttonColors,
  colors,
  borderRadius,
  fontWeights,
  fontFamilies,
  maxContainerWidth,
  textColors
}

export default theme
