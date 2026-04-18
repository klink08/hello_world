# vue_example

A Vue 3 single-page application demonstrating component architecture, Pinia state management, and Vue Router navigation. Features a header that loads user data asynchronously and a dashboard with client-side routing.

## Dependencies

| Package                   | Purpose                                 |
| ------------------------- | --------------------------------------- |
| Vue 3                     | UI framework                            |
| Pinia                     | State management                        |
| Vue Router                | Client-side routing                     |
| Tailwind CSS 4            | Utility-first styling (via Vite plugin) |
| Vite 8                    | Build tool and dev server               |
| Vitest                    | Unit testing                            |
| `@vue/test-utils`         | Vue component test utilities            |
| `happy-dom`               | DOM environment for tests               |
| `vite-plugin-magical-svg` | SVG bundling and sprite generation      |
| ESLint + Prettier         | Linting and formatting                  |
| Husky                     | Git hooks                               |

Node version is pinned to **v24.1.0** via `.nvmrc`. Use [nvm](https://github.com/nvm-sh/nvm) to switch automatically.

## Installation

```sh
nvm use       # switch to the pinned Node version
npm install
```

## Development

```sh
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # ESLint + Prettier checks
npm run test      # run tests in watch mode
npm run test:coverage  # run tests with coverage report
```
