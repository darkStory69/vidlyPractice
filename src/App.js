import Customers from "./components/customers";
import Movies from "./components/movies";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import React, { Component } from "react";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import Login from "./components/login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <main className="container">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/movies/:id" element={<MovieForm />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/" element={<Navigate to="/movies" />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
          </main>
        </Router>
      </>
    );
  }
}

export default App;
