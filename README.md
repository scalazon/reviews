# react-starter

Basic starter for React / Node / Express apps. Uses Babel and Webpack.

Uses Webpack Dev Server for Hot reloads (i.e. when your code changes, it'll automatically
show up in your local enviroment without manual reloads)

# How to use

Fork/clone the repo, then in terminal enter "npm --install" to set up dependencies.

In two seperate terminals enter "npm run dev-server" and "npm run dev-client" to start the Express server and launch the Webpack Dev Server.

# Note on .env and deployment variables

This setup uses dotenv for local development, which is why the "npm run dev-server" is required to start

The starter code is set up to run without that dependency in other enviroments since you may not have access to the file system elsewhere.

Enviromental and private variables should be kept in a .env for local development and you'll need to add them manually to the config.js file (see server.js PORT for an example).

See <a href='https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786'>this Medium article</a> for more details on why you would use .env.
