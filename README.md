# aurelia-skeleton-plugin (typescript)

## Building The Plugin

To build the plugin, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
  > **Note:** Gulp must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.
4. To build the plugin in the background, execute the following command:

  ```shell
  gulp watch
  ```
5. Link your plugin with an Aurelia app for local development and testing:

  ```shell
  npm link
  
  # at this point, change the directory to your Aurelia app, e.g.
  cd ../aurelia-skeleton-navigation
  
  # if using Webpack, simply run:
  npm link aurelia-skeleton-plugin
  
  # if using JSPM you will need to re-run this
  # after every change you make to your code:
  jspm link -y aurelia-skeleton-plugin
  ```
6. Make your Aurelia app load the plugin by adding the following line to the `configure` function in the `main.js` file of your `src` folder, e.g.

  ```diff
    export function configure(aurelia) {
      aurelia.use
        .standardConfiguration()
        .developmentLogging();

  +   aurelia.use.plugin('aurelia-skeleton-plugin');

      aurelia.start().then(a => a.setRoot());
    }
  ```

## Running The Unit Tests

To run the unit tests, simply run the command:

```shell
npm test
```
