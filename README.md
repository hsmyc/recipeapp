# recipeapp

In developing the recipeapp, my approach was deeply rooted in component-based design and collaborative thinking. Even though I single-handedly laid the foundation for this application, I always had in mind a team-centric environment where other developers might join in and enhance the app further. By ensuring that the components are clean, reusable, and modular, I wanted to set a precedent for maintainable and scalable code. While the essence of the application lies in its fundamental features, I've ensured there's ample scope for growth, innovation, and contributions. This is not just an app, but a canvas for collaborative creativity and continual improvement.

## 🚀 Getting Started

### Instructions to Start the Application

To start the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.

```sh
npm install
```

```sh
npm run dev
```

## 📂 Architectural Decisions

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
- Vitest: A Vite-native unit test framework.

### State Management with Pinia

Store: favorites.ts

Pinia is employed for state management, allowing structured storage and manipulation of favorite recipes:

#### State

favorites: Holds the IDs of favorite recipes.

#### Getters

getFavorites: Fetches the list of favorite recipes.

#### Actions

addFavorite: Adds a recipe by its ID to the favorites list.
removeFavorite: Removes a recipe ID from favorites.

#### Usage

Fetching Favorites: Access the list of favorite recipes via favorites.getFavorites.
Adding to Favorites: Use the favorites.addFavorite(recipeId) method.
Removing from Favorites: Use the favorites.removeFavorite(recipeId) method.

## 🛠 Build & Testing

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
