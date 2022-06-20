import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./Login'));
const Home = lazy(() => import('./Home'));
const Films = lazy(() => import('./Films'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Films" element={<Films />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;