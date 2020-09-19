# Pokemon Search with React and pokeapi.co

This was a project for me to practice creating a React app with pokeapi.co integration.
I set a limited spec to keep myself focused on a minimum viable product:

- Allow users to search for the classic pokemon (#1 - 151)
- Users can search by ID, name, or type
- Each Pokemon should be shown with name, id, type, weight, height, picture, habitat, and flavor text

## App component overview

- `isLoading` (boolean) depends on wheter a API request is in progress
- `error` (string) comes from search logic error and can be cleared
- `input` (string) comes from user's input to the search form
- `pokemon` (array of objects) is the parsed response from API requests

A reducer function updates these state properties depending on what action it has received.
Finished API requests or event handlers can dispatch different actions to update state accordingly.

![Graphic of App components](https://github.com/paulinang/pokesearch/blob/master/app-components.png)

## Dev Notes

### Topics I practiced:

- Creating React components and managing state + props
- React hooks, especially `useReducer`
- API calls in React with axios
- Writing some tests with Jest
- CSS styling with Grid and Flexbox

### Areas I'd like to improve on:

- My submitHandler function seems too complex as I chained a couple API calls together depending on the results of one.
- My error propogation through chained calls could be cleaner, I will try to find more articles on how to handle this.
- Better protection against race conditions for search requests. I dealt with the issue of a user trying a new search while a previous one is still in progress by disabling the Search feature while `isLoading` is `true`, but that is only a front-end protection.
- More test coverage - I mostly covered the utils for dealing with the pokeapi and a couple basic tests for the starting components. I would like to cover component behavior when state changes with the reducer function.

### Possible features to add

- Allow searching by multiple types, names, IDs. At this point, I think I should create a dedicated backend to handle inputs and API calls, instead of cramming it all into the searchHandler function.
- More interactivity with results: get pokemon of similar type if only one was found for name/id, get evolution of pokemon, etc.
