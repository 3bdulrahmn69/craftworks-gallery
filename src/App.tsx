import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Mobile from './pages/Mobile';
import Server from './pages/Server';
import Website from './pages/Website';

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
    </BrowserRouter>
  );
};

export default App;
