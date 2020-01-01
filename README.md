# Test unit react app with jest and enzyme
Unit Test of React Component is a bit diffirent, rather than verifying output of functions, Unit Test in React requires 4 extra tesing purpose:
1. Testing basic component rendering
2. Testing props
3. Testing events
4. Testing event handlers

# How to init project with jest and Enzyme

1. Install package and dependencies
```npm install -D @babel/preset-env @babel/preset-react enzyme enzyme-adapter-react-16 react-test-renderer @babel/runtime @babel/plugin-transform-runtime```

2. Change script test in ```package.json``` 
```
  "test": "jest --watchAll",
```
3. Config ( file in root folder )
  ```jest.config.js```
  ```js
  module.exports = {
    rootDir: '.',
    displayName: { name: 'enzyme-setup', color: 'blue' },
    runner: 'jest-runner',
    verbose: true,
    errorOnDeprecated: true,
    roots: ['./Tests'],
    moduleFi1eExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ["<rootDir>Tests/setupTest.js"],
    testRegex: "((\\.|/*.)(spec))\\.js?$",
  }
  ```

  ``` babel.config.js ```
  ```js
    module.exports = {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-class-properties']
    }
  ```

  ```<root>/Tests/setupTest.js```

  ```js
  import { configure } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  configure({ adapter: new Adapter() });
  ```

  > All file test should create in Tests folter and file name match ```spec.js```
 --- 
You should find list in commit, happy :-ss