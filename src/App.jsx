import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages';

function App() {
  return (
    <div className="application">
      <BrowserRouter>
        <Routes>
          <Route path="/katrin-design/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
