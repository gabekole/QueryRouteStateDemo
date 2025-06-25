import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Search from './Search';
import UserDetails from './UserDetails';
import Favorites from './Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <header className="d-flex flex-column align-items-center py-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
              <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <main className="text-center mt-4">
            <h1>User Management</h1>
            <Routes>
              <Route path="/" element={<Search />} />
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
