module.exports = {
  plugins: [
    require('doiuse')({
      browsers: ['ie > 11', '> 1%', 'not OperaMini all'],
      ignore: ['flexbox', 'object-fit']
    }),
    require('stylelint')({}),
    require('postcss-cssnext')({})
  ]
}
