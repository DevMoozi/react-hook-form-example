import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputTest from './pages/hookForm/InputTest';
import ControllerTest from './pages/hookForm/ControllerTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<InputTest />} />
        <Route path={'/controller'} element={<ControllerTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
