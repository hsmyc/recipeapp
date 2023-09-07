# recipeapp

This template should help get you started developing with Vue 3 in Vite.

## Instructions to Start the Application

To start the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.

```sh
npm install
```

```sh
npm run dev
```

## Architectural Decisions

### Folder Structure

The project follows a modular folder structure, where each component is contained within its own directory. The directory structure is as follows:

```src/
  assets/
  components/
    __tests__/
        ComponentName.spec.ts
    ComponentName/
        ComponentPart.vue
        ComponentPart.vue
    Styled
        StyledComponent.vue
        StyledComponent.vue
  views/
  App.vue
  main.ts
```

The `assets` directory contains static assets such as images and fonts. The `components` directory contains all of the application's components, each in its own directory with a `.vue` file. `__tests__` folder contain `.spec.ts` files for unit testing. The `views` directory contains the top-level views of the application. The `App.vue` file is the root component of the application, and `main.ts` is the entry point for the application.

### Included Libraries

The project uses the following libraries:

- Vue.js: a progressive JavaScript framework for building user interfaces.
- Vue Router: the official router for Vue.js.
- Pinia: a state management library for Vue.js applications.
- Axios: a promise-based HTTP client for the browser and Node.js.

### Frameworks

The project uses the Vue.js framework.

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
