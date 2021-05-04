# Brainn Challenger

This project is a front-end application for lottery results.

## What is inside?

This project uses:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Cypress](https://www.cypress.io/)
- [Graphql Code Generator](https://www.graphql-code-generator.com/)
- [Graphql](https://graphql.org/)
- [Graphql Request](https://github.com/prisma-labs/graphql-request)

## Getting Started

First, you need install all dependencies with `yarn or npm i` , after you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Navigate with static pages

First, run the build:

```bash
npm run build
# or
yarn build
```

Second, run next server with:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing with Cypress

First, do you need run:

```bash
npm run build & npm run start
# or
yarn build & yarn start
```

after that, you can run:

```bash
npm run cypress
# or
yarn cypress
```

## Testing with Jest

First, do you need run:

```bash
npm run test
# or
yarn test
```

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `cypress`: runs end-to-end tests
