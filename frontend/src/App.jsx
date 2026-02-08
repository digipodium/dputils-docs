import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FilesDoc from './pages/FilesDoc';
import ScrapingDoc from './pages/ScrapingDoc';
import GettingStarted from './pages/GettingStarted';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/files" element={<FilesDoc />} />
          <Route path="/scraping" element={<ScrapingDoc />} />
          <Route path="/getting-started" element={<GettingStarted />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
