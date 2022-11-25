import React from 'react';
//Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//***// */
import ScrollToTop from './ScrollToTop';
//pages
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
//***// */

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};
export default AppRoutes;
