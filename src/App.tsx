import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Mobile from './pages/Mobile';
import Server from './pages/Server';
import Website from './pages/Website';
import ScrollToTop from './components/ui/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/server" element={<Server />} />
        <Route path="/website" element={<Website />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
