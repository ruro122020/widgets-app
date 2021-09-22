# Notes

A simple widgets application using wikipedia's api with React Hooks.

1. useEffect is similar to the lifecyle methods in a class but not exactly the same. You can use it

- When the component is rendered for the first time only
- Whent the component is rendered for the first time and whenever it rerenders
- When the component is rendered for the first time and whenever it rerenders and some piece of data has changed\

First Argument you pass on the useEffect is a callback function\

The second argument you pass is an array. The array controlls which of the above points the useEffect will fall into.

- no array means you want the useEffect to run the callback at initial render and after every rerender

- an empty array means you want the callack to run at inital render only. It will not run when the component rerenders.

- an array with a state variable means you want the callback to run at initial render and after every rerender ONLY IF the state has changed since last render

2. Do not mark the callback in useEffect as async. There are 3 ways to work around this.

```
//DO NOT DO THIS
useEffect(async()=>{
  await axios.get('URL string');
},[])
```

- You can define a function inside the callback and mark it as async and then call it.

```
useEffect(()=>{
  const search = async () => {
    await axios.get('URL string')
  }
  search();
},[])
```

- You can use an IIFE(Immediately Invoked Function Express) like so:

```
useEffect(()=>{
  (async ()=>{
    await axios.get('URL string')
  })()
},[])
```

This defines a function and then immediately invokes it.

- You can just use normal promises with the `.then` method

```
useEffect(()=>{
  axios.get('URL string')
  .then((response)=>console.log(response))
}, [])
```

3. Clean up functions in a useEffect gets called when the component is rerendered and not on initial render. Upon rerender the clean up functions gets called first and then the code outside of the callback function gets executed.

4. One thing to note on using state in a useEffect, React will ask you to make that state a dependacy (add it to the array). Its reason is to avoid difficult tricky bugs but sometimes it ends up creating bugs when you do add it. Its important to not that it all depends on what you're trying to do. Try to add any state you are using in the useEffect as a dependency and make your code work with that approach but it's not the end of the world if you can't take that approach.

### Click Events Dropdown.js

1. when creating a click event in a component the event only works for that particular component. In the dropdown.js file when we want the dropdown to close when clicking outside of the dropdown box, it won't close cause you are clicking outside of the component where the click event was set.

2. The dropdown has a hard time setting up event handlers on elements that it does not create. To get the dropdown menu to close when clicking outside of the dropdown menu, the dropdown component needs to detect a click event on ANY element besides the ones it created.

   > See the Dropdown.js file to see how this works

3. Event bubbling is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy that also has an event handler. In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements that have an event handler.

4. When using addEventListener, it will be called first and then any react event listener will be called afterwards no matter the hierarchy. So even if the react listener was set before the addEventListener, the addEventListener will be called first.

5. After the addEventListener gets called then the event bubbling starts with the react event listeners from the most child to the most parent.

### Navigation

1. When creating a navigation from scratch(without react-router), upon clicking on each 'a' tag, a request is sent causing a request to trigger everytime you click on any of the routes. To avoid this, use `window.history.pushState({}, '', /pathname)`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
