import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import ListItem from './Components/ItemsSection/ListItem';
import { Home } from './Components/pages/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to="/react-components/home"> Home </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/react-components/home" element={<Home />} />
          </Routes>
          <ListItem />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
