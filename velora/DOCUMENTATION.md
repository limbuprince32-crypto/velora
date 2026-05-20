# Velora Project Documentation

## Overview

Velora is a React movie discovery application built with Vite. The app presents a streaming-style interface where users can browse trending, popular, top-rated, and genre-based movies. Movie data, metadata, posters, and backdrops are loaded from The Movie Database (TMDB) API.

The project currently brands the interface as `NEON` in the navigation and footer, while the project/package name is `velora`.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`
- ESLint 9
- TMDB REST API

## Project Structure

```text
velora/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── App.css
    ├── assets/
    │   ├── hero.png
    │   ├── react.svg
    │   └── vite.svg
    ├── components/
    │   ├── Footer.jsx
    │   ├── GenreSection.jsx
    │   ├── HeroSection.jsx
    │   ├── MovieContent.jsx
    │   ├── MovieDetails.jsx
    │   ├── MovieSlider.jsx
    │   ├── Navbar.jsx
    │   └── ScrollToTop.jsx
    ├── context/
    │   └── MovieContext.jsx
    └── services/
        └── api.js
```

## Getting Started

### Prerequisites

- Node.js
- npm
- A TMDB API key

### Install Dependencies

Run commands from the nested application directory:

```bash
cd /Users/princelimbu/Desktop/velora/velora
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Configuration

### Vite Base Path

`vite.config.js` sets the production base path with:

```js
base: process.env.VITE_BASE_PATH || "/velora"
```

Use `VITE_BASE_PATH` when deploying to a different subpath.

### API Key

The TMDB API key is currently hard-coded in `src/services/api.js`:

```js
const API_KEY = "..."
```

For production, move this value to an environment variable such as `VITE_TMDB_API_KEY`, then read it with:

```js
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
```

Vite only exposes browser environment variables that start with `VITE_`.

## Application Flow

1. `main.jsx` mounts the React app into `#root`.
2. `App.jsx` wraps the UI in `MoviesProvider`.
3. `MovieContext.jsx` fetches initial movie data on load:
   - trending movies
   - popular movies
   - top-rated movies
   - genre list
4. `MovieContent.jsx` renders the main content sections.
5. Components read shared state through the `useMovies()` hook.
6. Selecting a movie stores its ID in context and opens the `MovieDetails` modal.
7. Closing the modal clears the selected movie ID and restores page scrolling.

## State Management

Global movie state is managed in `src/context/MovieContext.jsx`.

The provider stores:

- `trendingMovies`
- `popularMovies`
- `topRatedMovies`
- `genres`
- `loading`
- `error`
- `selectedMovieId`

It also exposes:

- `openMoviesDetails(movieId)`
- `closeMovieDetails()`
- `setError`
- `setSelectedMovieId`

`openMoviesDetails` disables body scrolling while the modal is open. `closeMovieDetails` restores scrolling.

## API Service

All TMDB requests live in `src/services/api.js`.

Available functions:

- `fetchTrendingMovies()` - gets weekly trending movies.
- `fetchPopularMovies()` - gets popular movies.
- `fetchTopRatedMovies()` - gets top-rated movies.
- `fetchMoviesByGenre(genreId)` - gets movies for a specific genre.
- `fetchGenres()` - gets the TMDB movie genre list.
- `fetchMovieDetails(movieId)` - gets full metadata for one movie.
- `searchMovies(query)` - searches movies by text.
- `getImageURl(path, size)` - builds a TMDB image URL or returns a placeholder.

## Components

### `Navbar.jsx`

Displays the fixed top navigation, brand text, section links, mobile menu, and movie search.

Key behavior:

- Changes background after the page is scrolled.
- Debounces search input by 500ms.
- Shows up to five desktop search results.
- Opens the movie details modal when a result is selected.
- Includes a mobile navigation menu.

### `HeroSection.jsx`

Displays a full-screen featured movie carousel using the first five trending movies.

Key behavior:

- Auto-advances every 8 seconds.
- Fades between slides.
- Shows rating, release year, title, overview, and action buttons.
- Opens the movie details modal from the primary action.

### `MovieSlider.jsx`

Renders horizontal movie rows for trending, popular, and top-rated collections.

Key behavior:

- Scrolls left/right by 75% of the visible slider width.
- Shows poster cards, ratings, years, and hover overlays.
- Opens the movie details modal on card click.

### `GenreSection.jsx`

Lets users browse movies by genre.

Key behavior:

- Selects the first genre after genres finish loading.
- Fetches movies when the selected genre changes.
- Shows the first eight movies for the selected genre.
- Opens the movie details modal on card click.

### `MovieDetails.jsx`

Displays a modal with detailed metadata for the selected movie.

Key behavior:

- Fetches movie details by ID.
- Shows backdrop, poster, title, year, rating, runtime, release date, adult flag, genres, tagline, overview, production details, language, budget, revenue, and status.
- Links to the official movie website and IMDb when available.
- Handles loading and error states.

### `MovieContent.jsx`

Composes the main page content.

It renders:

- `HeroSection`
- trending movie slider
- popular movie slider
- top-rated movie slider
- genre browser
- details modal when a movie is selected

### `Footer.jsx`

Displays the footer brand, description, social links, quick links, resource links, newsletter form, legal links, and TMDB attribution.

### `ScrollToTop.jsx`

Shows a floating scroll-to-top button after the user scrolls more than 300px down the page.

## Styling

The project uses Tailwind CSS utility classes throughout the React components. Global CSS is minimal:

- `src/index.css` imports Tailwind and enables smooth scrolling.
- `src/App.css` still contains template-style CSS and does not appear to be used by the current app layout.

The visual style is a dark movie-streaming interface with neutral backgrounds, purple highlights, poster cards, backdrop images, hover overlays, and responsive layouts.

## Data Dependencies

The app depends on TMDB response fields such as:

- `id`
- `title`
- `overview`
- `poster_path`
- `backdrop_path`
- `vote_average`
- `vote_count`
- `release_date`
- `adult`
- `runtime`
- `genres`
- `production_companies`
- `production_countries`
- `spoken_languages`
- `budget`
- `revenue`
- `status`
- `homepage`
- `imdb_id`

## Known Issues and Improvement Notes

- `src/services/api.js` exposes a TMDB API key in client-side code. Move it to a `VITE_` environment variable before production deployment.
- `MovieContext.jsx` creates `error` state but does not currently set it when initial data fetching fails.
- `MovieContext.jsx` uses `<MoviesContext value={...}>`; the standard React context provider syntax is `<MoviesContext.Provider value={...}>`.
- Some navigation links rely on section IDs, but `MovieSlider` renders `id=""`, so `#trending`, `#popular`, and `#top-rated` links may not target the intended sections.
- `Navbar.jsx` has an anchor with `href="\"`, which should likely be `/` or `#`.
- The mobile search result markup is currently placeholder content instead of mapping actual search results.
- `GenreSection.jsx` initializes `loadingGenreMovies` as an array, but it is used as a boolean.
- `GenreSection.jsx` has a `bg-lienar-to-t` class typo; it should likely be `bg-linear-to-t`.
- `MovieSlider.jsx` imports `BottleWine` from `lucide-react`, but the icon is unused.
- `MovieDetails.jsx` contains a visible typo: `View on IMBb`.
- The watchlist and newsletter actions are presentational and do not currently persist data or submit anywhere.
- The project has a parent `package.json` and a nested app `package.json`; the nested `velora/package.json` is the one used to run the React app.

## Suggested Next Steps

1. Move the TMDB API key into a `.env` file and update `api.js`.
2. Fix the context provider syntax if the app is not rendering correctly.
3. Wire section IDs correctly for navigation.
4. Replace mobile search placeholder results with real mapped results.
5. Remove unused starter assets and template CSS if they are no longer needed.
6. Add basic tests for API helpers, modal open/close behavior, and search interactions.
7. Add error handling for failed initial data loads.
