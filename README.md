# Sneaker Website

## Description

My goal for this project is to make a sneaker website. I want users to be able to browse the site for shoes, add it to a 'want list' and even add them to their shopping cart. The shopping cart should accurately calculate the price of all shoes in the cart. The user should be able to click on a shoe from the landing page and see details about that individual shoe.

At the moment, New Arrivals is my landing page. On the landing page, the user can hover over individual shoe cards to receive the hover effects. The hover effect includes an animation that slides the 'add to cart' button onto the shoe image. The user can click on the add to cart button and a modal will pop up notifying the user of the addition to their cart. The modal will then give the user the option to continue shopping or to view their cart. Currently the route for 'go to cart' works but there is nothing in that component. If the user clicks on 'continue shopping' while still in the modal, they will be taken back to the home screen. Once at the home screen, if the user then hovers over the shoe they previously added to the cart, the animation will now show that the item is currently in their cart and they will no longer be able to add that shoe to the cart.

User can also click on a shoe to be taken to that shoe's details and can add that selected shoe to their cart from the Shoe Details page, and will receive the same modal.

My next step is to work on the shopping cart component so that the user can see their total after adding shoes to the cart.

## Structure

![Alt text](<src/assets/images/(structure.jpg)?raw=true> 'Title')

## Setup/Installation Requirements to run program

- Clone from Github

- Navigate to root project directory in the terminal.

- Input npm install into the terminal to install dependancies.

- Npm run start to launch the page

## Known Bugs

- N/A

## Support and contact details

For any quesitons contact me at: cristianjlucero32@gmail.com

## Technologies Used

- React
- JSX
- JavaScript

### License

Copyright (c) 2018 Cristian Lucero

This website is licensed under the MIT license.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
