import { useEffect, useState } from 'react'
import './App.css'
import Loader from './containers/Loader/Loader';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 9000);
    }

    fakeDataFetch();
  }, [])

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <h1>Sejá bem vindo!</h1> 
  );
}

export default App;
