import { useEffect, useState } from 'react'
import './App.css'
import Loader from './containers/Loader/Loader';
import Header from './containers/Header/Header';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }

    fakeDataFetch();
  }, [])

  return isLoading ? (
    <div className="app-container">
      <Loader></Loader>
    </div>
  ) : (
    <div className="app-container">
        <Header/>
    </div>
  );
}

export default App;
