1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- Filter
- Map
- Reduce
- You can use object.assign or the spread operator to extend properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions contain information on what to do with an event such as call to an API. They then make the reducer aware of the results with dispatch.
- Reducers take in an action from a dispatch. It will update the store using information received in the dispatch, such as the action type, or the payload. The action type often helps decide where the payload should be used.
- The store is the global application state that the reducer is aware of. It is updated only by the reducer and never mutated directly.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state contains information that will need to be used throughout the entire application. This helps prevent prop drilling and errors by moving it all to one location.
- Component state in redux is often used for UI related state. Such as a forms input values that the overall application does not need to know.

1.  What is middleware?

- Middleware is used to insert an extra step into the redux loop. This allows you to pass all of the actions through the middleware and possibly even modify them. It is important to know which order your middleware goes in, because you could have unwanted side effects.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux thunk is used to help make actions asynchronous. It will check and see if each action returns an action, or if it returns a function, aka a thunk.

1.  Which `react-redux` method links up our `components` with our `redux store`?

- Connect
