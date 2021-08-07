module.exports = {
  module: {
    rules: [
      {
        test: /\.tpl$/i,
        use: 'raw-loader',
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
};
