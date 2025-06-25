import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import UserDetails from './components/UserDetails';
import Favorites from './components/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">

        <header className="d-flex justify-content-between align-items-center py-3 bg-light">
            <h1 className="ms-3 flex-shrink-0">User Management App</h1>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Search</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/favorites">Favorites</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <main className="mt-4">
            <Routes>
              <Route path="/" element={<SearchBox />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
