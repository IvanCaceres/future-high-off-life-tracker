This is a PHP/Laravel application task scheduler that scrapes the 150 different https://highoff.life/ (High Off Life Album Promo) websites for the release of Future's High Off Life Album.
The promotional campaign promises a leaked track whose location is ephemeral and changes every 10 minutes or so to a new https://highoff.life/ domain name.
This project uses the official promo campaign's AWS api to cycle through the 150 domain names requesting each one to find the correct location.

Demo: http://tacobreathsoftware.com/future-high-off-life-leak-tracker

![Demo gif](demo.gif)


This project was built  with PHP / Laravel for the backend application and job runner, as well as [Create React App](https://github.com/facebook/create-react-app) for the frontend application.

## Available React / Frontend Scripts

In the root project directory, you can run:

### `npm start`


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
You can then copy the build files into the backend public directory:
### `/backend/delivery/public`
Replacing what's in there will stage the new files for visitors, you must also update the markup in the backend index template `/backend/delivery/resources/views/welcome.blade.php` by copying the build html markup from the `build/index.html` file.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.