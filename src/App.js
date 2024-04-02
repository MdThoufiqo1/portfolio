import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import About from './pages/About';
import ProjectExp from './pages/Project_exp';
import Skills from './pages/Skills';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Frontpage />
              <About />
              <Skills />
              <ProjectExp />
              <Contact/>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
    
  );
};

export default App;
