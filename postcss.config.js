module.exports = {
  plugins: [
    // require('doiuse')({
    //   browsers: ['ie > 11', '> 1%', 'not OperaMini all'],
    //   ignore: ['flexbox', 'object-fit', 'filter']
    // }),
    require('stylelint')({}),
    require('postcss-cssnext')({}),
    require('postcss-clean')({})
  ]
};
