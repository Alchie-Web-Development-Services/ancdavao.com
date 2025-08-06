# ANCDavao Website

This repository contains the Next.js application for the Archdiocesan Nourishment Center (ANC) Davao website. It is built to provide a robust and scalable platform for managing content, engaging with the community, and facilitating various organizational activities.

## Technologies Used

- **Next.js**: A React framework for building performant and scalable web applications.
- **React**: A JavaScript library for building user interfaces.
- **Firebase**: Utilized for authentication (Email/Password, Google Sign-In) and potentially other backend services.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: For type-safe and maintainable code.
- **Vitest**: A fast and modern testing framework.
- **ESLint**: For maintaining code quality and consistency.

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

- `yarn dev`: Runs the app in development mode.
- `yarn build`: Builds the application for production.
- `yarn start`: Starts the production server.
- `yarn lint`: Runs ESLint to check for code quality issues.
- `yarn test`: Runs tests using Vitest.
- `yarn coverage`: Runs tests and generates a code coverage report.

## Project Structure

- `pages/`: Contains the Next.js pages (routes) of the application, including:
  - `pages/auth/`: Authentication-related pages (login, register).
  - `pages/my/`: User-specific pages (e.g., account dashboard).
- `public/`: Stores static assets like images, favicons, and data files.
- `src/components/`: Houses reusable React components, including:
  - `AuthForm/`: (Deprecated) Old authentication form.
  - `AuthStatus/`: (Deprecated) Old authentication status display.
  - `LoginForm/`: Component for user login.
  - `RegisterForm/`: Component for user registration.
  - `GoogleSignInButton/`: Reusable component for Google authentication.
  - Other UI components (Header, Footer, SEO, etc.).
- `src/constants/`: Defines application-wide constants.
- `src/context/`: Manages global state using React Context API, including `AuthContext` for authentication state.
- `src/hooks/`: Contains custom React hooks.
- `src/lib/`: Utility functions and Firebase initialization (`firebase.ts`).
- `src/services/`: Integrates with external services.
- `src/styles/`: Global stylesheets.

## Deployment

This project is configured for deployment with Firebase Hosting, leveraging Firebase Authentication for user management.
