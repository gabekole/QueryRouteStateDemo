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
        <div className="container-fluid">
          <header className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand fs-2" to="/">User Management App</Link>

                <div className="d-flex ms-auto">
                  <ul className="navbar-nav d-flex flex-row gap-3">
                    <li className="nav-item">
                      <Link className="nav-link fs-3" to="/">Search</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fs-3" to="/favorites">Favorites</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <hr class="hr hr-blurry" />
          </header>


          <main className="mt-4">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="col-md-8 d-flex flex-column align-items-center">
                  <Routes>
                    <Route path="/" element={<SearchBox />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                  </Routes>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
