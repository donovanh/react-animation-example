const keyframes = {
  fadeIn: `@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }`
}

const timingFunctions = {
  easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
}

const animations = {
  fadeIn: `
    animation: fadeIn 500ms ease-out forwards;
    ${keyframes.fadeIn}
  `,
  fadeInUp: `
    animation: fadeInUp 500ms ${timingFunctions.easeOutExpo};
    ${keyframes.fadeInUp}
  `
}

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
  animations,
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
