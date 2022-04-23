import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WindowsDesktop from './WindowsDesktop';

function App() {
  return (
    <Routes>
      <Route path="/desktop" element={<WindowsDesktop />} />
    </Routes>
  );
}

export default App;
