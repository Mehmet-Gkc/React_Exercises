# Router Basics V6

In this exercise, you'll create a simple website with a navigation bar. You learn how to define different routes and render each nested route using **React Router v6**. 

## What you will be doing

* First, have a look at our router map:
  
![Router Map](/router-map.png)

* In the `parent` route, we have a navigation bar. This needs to be always shown in our web app.  
  
* We have 5 routes nested in the `parent` route: 
    - `Home` - a default page, no URL path is given.
    - `Page not found` - directed when there's no matching route to the URL path is found.
    - `ChildOne`, `ChildTwo`, `LastChild` - URL paths are given and a matching child route is rendered.

### Example Output

This is what an [Expected Output](https://router-basics-v6.vercel.app/) looks like.


## Tasks

### Task 1 Install react-router-dom
* Install `react-router-dom` by
`npm i react-router-dom` 

### Task 2 Router Setup
* In `src` folder, create a `components` folder and add 6 components:
  - `Parent` 
  - `Home`
  - `PageNotFound`
  - `ChildOne` `ChildTwo` `LastChild`
  
* In `App.js`, 
  - Please import 6 components above. 
  - Import **BrowserRouter**, **Routes**, **Route** from `react-router-dom`.
  - Set up the routes following the router map image above. 5 child routes are nested in `Parent`. Each route has a component element and a URL path.
  - For `Parent`, a path is set as `/`.
  - For the default page `Home`, give an attribute `index` instead of defining a path. When `Home` is selected, the path remains `/`.  
  - `PageNotFound` is for any paths that don't have matching routes. Use `*` for path. 
   - For each child route, a different path is required. (`/one`, `/two`, `/three`)

### Task 3 Link & Render Routes
* In `Parent.js`, the navigation bar for `Home`, `ChildOne`, `ChildTwo`, `LastChild` is located. 
  - Please import **Link** and **Outlet** from `react-router-dom`.
  - Use `Link` to set the URL path for each route.
  - Add `Outlet` - this renders the current route selected. 

## Hints

- [Useful Website](https://reactrouter.com/en/main)

