module.exports = {
  root: true,
  parserOptions: {
      sourceType: 'module'
  },
  // required to lint *.vue files
  plugins: [
     
  ],
  // add your custom rules here
  'rules': {
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}