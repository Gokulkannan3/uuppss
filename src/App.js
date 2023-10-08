import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes'



function App() {
  return (
    <div>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
