const Hapi = require('@hapi/hapi');
(async function () {
  try {
    const server = Hapi.server({
      host: '127.0.0.1',
      port: 8765,
      routes: {
        cors: true,
      }
    });

    await server.register([
      { plugin: require('@hapi/inert') },
    ]);

    server.route([
      {
        method: 'GET',
        path: '/{path*}',
        options: {
          auth: false,
        },
        handler: {
          directory: {
            path: 'public',
            defaultExtension: 'html'
          }
        }
      },
    ]);

    await server.start();

    console.log(
      '\n+-----------------------------------------+' +
      `\n| \u001b[32mServer started on ${server.info.uri}\u001b[39m |\n` +
      '+-----------------------------------------+\n'
    );
  } catch ( err ) {
    console.error(err);
  }
})();
