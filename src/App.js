import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { use, useEffect } from 'react';
import Card from './Card';
import { useState } from 'react';
import ReactLoading from'react-loading';



function App() {
  const [Data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

   const gatDataForServer = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      setData(res.data)
      setLoading(false);

    } catch (error) {
      console.log(error)
      setLoading(false);
      setError(error.message);
    }
  }


  useEffect(() => {
    gatDataForServer()
  }, [page])

  
  return loading ?<h1 style={{textAlign:"center"}}>Loading.....</h1>: error ? <h1 style={{textAlign:"center"}}>Network error......</h1> : (
    <div>
      <button  disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
      <span>{page}</span>
      <button disabled={page === Data.length} onClick={() => setPage(page + 1)}>Next</button>
      {
        Data.map((el, i) => {
          return <Card key={i} id={el.id} title={el.title} body={el.body} />
        })
      }
    </div>
  );
}

export default App;
