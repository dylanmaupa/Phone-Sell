import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import { useState, CSSProperties, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Router className='loader'>
        {
          loading ?
            <div className="loader">
              <PropagateLoader
                color={"blue"}
                loading={loading}
                size={20}
              />
            </div>

            :


            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path="/products" element={<Product />} />
            </Routes>
        }
      </Router>
    </>
  );
}

export default App;
