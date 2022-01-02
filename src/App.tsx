import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputTest from './pages/hookForm/InputTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<InputTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
