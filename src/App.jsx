import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import Home, { ContactSection } from "./components/Home";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import "./App.css";

function RoutePosition() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutePosition />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header page-width">
        <Link className="wordmark" to="/">
          Aaron Bringhurst
        </Link>
        <nav aria-label="Main navigation">
          <Link to="/#work">Work</Link>
          <Link to="/#about">About</Link>
          <Link to="/resume">Résumé</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={
              <div className="page-width legacy-page">
                <p className="eyebrow">Earlier work</p>
                <Portfolio />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="page-width standalone-contact">
                <ContactSection />
              </div>
            }
          />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="*"
            element={
              <section className="page-width missing-page">
                <p className="eyebrow">404</p>
                <h1>Page not found.</h1>
                <Link className="button button-primary" to="/">
                  Back to home
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer page-width">
        <span>© {new Date().getFullYear()} Aaron Bringhurst</span>
        <Link to="/portfolio">Earlier projects</Link>
        <a href="#main-content">Back to top ↑</a>
      </footer>
    </BrowserRouter>
  );
}
