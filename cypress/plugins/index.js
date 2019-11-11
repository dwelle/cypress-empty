const preprocessor = require('@cypress/browserify-preprocessor');
const compileFile = preprocessor( preprocessor.defaultOptions );

module.exports = ( on ) => {

  on('file:preprocessor', ( file ) => {
    return compileFile(file);
  });

  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      return args.concat('--auto-open-devtools-for-tabs');
    }
  });
}
