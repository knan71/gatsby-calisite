// utils/typography.js
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: '1.666',
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Hindi Madurai', 'sans-serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['800', '600', '400'],
    },
    {
      name: 'Hindi Madurai',
      styles: ['400', '300', '200'],
    },
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
