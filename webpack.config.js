module.exports = {
  optimization: {
    treatWarningsAsErrors: false,
  },
  // ....|.....
  resolve: {
    fallback: {
      url: require.resolve('url'),
    },
  },
};
