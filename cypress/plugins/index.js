const preprocessor = require('@cypress/browserify-preprocessor');
const compileFile = preprocessor( preprocessor.defaultOptions );

module.exports = ( on ) => {

  on('file:preprocessor', ( file ) => {
    return compileFile(file);
  });

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--auto-open-devtools-for-tabs');
    }

    return launchOptions;
  });
}
