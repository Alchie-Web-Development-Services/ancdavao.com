# ANCDavao Monorepo

This monorepo contains the Next.js application for the ANCDavao website.

## Getting Started

First, install the dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

*   `yarn dev`: Runs the app in development mode.
*   `yarn build`: Builds the application for production.
*   `yarn start`: Starts the production server.
*   `yarn lint`: Runs ESLint to check for code quality issues.
*   `yarn test`: Runs tests using Vitest.
*   `yarn coverage`: Runs tests and generates a code coverage report.

## Project Structure

*   `pages/`: Contains the Next.js pages (routes) of the application.
*   `public/`: Stores static assets like images, favicons, and data files.
*   `src/components/`: Houses reusable React components.
*   `src/constants/`: Defines application-wide constants.
*   `src/context/`: Manages global state using React Context API.
*   `src/hooks/`: Contains custom React hooks.
*   `src/services/`: Integrates with external services, such as Firebase.
*   `src/styles/`: Global stylesheets.

## Deployment

This project is configured for deployment with Firebase Hosting.