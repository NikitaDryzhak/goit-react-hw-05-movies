import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
const Home = lazy(() => import('./Home/Home.jsx'));
const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Review = lazy(() => import('./Review/Review.jsx'));
const Searchform = lazy(() => import('./Searchform/Searchform.jsx'));
const NotFound = lazy(() => import('./NotFound/NotFound.jsx'));

export const App = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Searchform />} />
          <Route path="movies/:movieId/*" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
