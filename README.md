# Composite Stepper React

this project was created to study and test a new architecture to React Native Projects
## Inspirations

Composite Pattern, Chain Pattern, DDD, and Clean Architecture.
This project was inspired by the book "pro javascript design patterns" written by Ross Harmes and Dustin Diaz

## Structure
### Domains
 Business Domains. The most important rules to your business.
 They have a mission to chaining multiple use cases
 One Domain can have multiple use cases (and one use case can be present in multiple Domains)

### UseCases
  Use Cases are independent codes, with a single and unique responsibility. 
  These can be simple and generic rules such as validators or more complex use cases, such verify if a user has a specific field on the database layer.

### Template
  The View layer. The Template is a generic page or screen. This layer is called the Presentational component, and they haven't any logic or rule.
  Their events (click, press...) are received by props from the use cases, this way, the Templates are more flexible as can be

### Infra
  This Layer is responsible for external tools or technologies. You can use it to connected your project an external database, or create a new layer (inside infra) to consuming an external APIs
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
