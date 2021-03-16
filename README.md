### Overview
This application is a simple counter application that uses [React.js](https://reactjs.org/) and [Redux](https://reactjs.org/). A user can increment or decrement the counter by clicking the respective counter control buttons. The user can also store counter values, which are saved in memory, and delete them as well.

### Purpose
The purpose of this application is to demostrate the fundementals of working with **React** and **Redux**.

### Installed Packages
1. Redux
2. React-Redux

### Main Files & Directories
1. index.js - This is where the centralized store that redux uses to manage state is initialized. It also uses the **Provider** which makes the store available to the React application.
2. store/actions.js - This is where all of our actions are defined.
3. store/reducers/counter.js - This is where the reducer function for incrementing and decrementing the counter resides.
4. store/reducers/result.js - This is where the reducer function for storing and removing counter results resides.
5. containers/Counter.js - This is where we connect our React components to the Redux store.
6. components - This directory contains the components used within the **Counter** container.

### How It Works
The redux store is initialized with the combined reducers imported from the `store/reducers` directory. From there the `connect` method is used on the *Counter* component within the containers directory which connects the component to the redux store. The `connect` method can take two argument, *mapStateToProps*, and *mapDispatchToProps*, both are javascript objects that deal with the state of the redux store and dispatching actions to the redux store. When one of the counter buttons are clicked, an action is dispatched to the counter reducer function, which then will update the state accordingly. The same applies for dispatching results.

### Running The App
1. Download or clone the repository
2. Run `npm install`
3. Run `npm start`
4. If no other port is listening on 3000 then navigate to [localhost:3000](http://localhost:3000).
