describe('test', () => {
  it('test', () => {
    cy.viewport(560, 800);

    cy.window().then( window => {
      const { document } = window;
      document.documentElement.innerHTML = `
        <style>
          code { background: #DDD; padding: 2px 3px; }
        </style>
        <body>
          <h2>Not served by server!</h2>
          <p>Hello, this page was created by editing the default HTML page.</p>
          <p>If you want to visit a page served by our server in <code>server/server.js</code>, uncomment the <code>cy.visit('/')</code> in <code>test.spec.js</code> (make sure the server is running, first).</p>
        </body>
      `;
    });

    // cy.visit('/');
  });
});
