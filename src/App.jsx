/* eslint-disable linebreak-style */
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
