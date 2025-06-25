import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';
import About from './About';
import UserProfile from './UserProfile';
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
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/123?name=John">User Profile</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <main className="text-center mt-4">
            <h1>Vite + React + Redux</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
