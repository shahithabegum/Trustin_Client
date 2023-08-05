import {BrowserRouter as Router} from 'react-router-dom';
import { RootRoutes } from './config/route';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//Router and Toast Implementation
function App() {
  return (
    <div className="App">
        <Router>
      <RootRoutes />
      <ToastContainer 
       position="top-right"
       autoClose={2000}
       newestOnTop={false}
       Style={{with:"auto"}}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
      />
      </Router>
    </div>
  );
}

export default App;
