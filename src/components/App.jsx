// import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchArticles } from '../services/api';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import toast from 'react-hot-toast';

// const API_KEY = '47413156-c8c9abea8f6d88937b7892740';
// const params = new URLSearchParams({
//   key: API_KEY,

//   q: `pig`,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
// });

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  // console.log(articles);
  // console.log(query);

  useEffect(() => {
    if (query === '') {
      
      return;
    }
    //   axios
    //     .get(`https://api.unsplash.com/photos/?${params}`)
    //     .then(res => setArticles(res.data));
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const {results, total_pages} = await fetchArticles(query, page);
        toast(`Ти знайшов ${query}`)
        console.log(results);
        console.log(total_pages);
        setArticles(prev => [...prev, ...results]);
      } catch (error) {
        toast.error(`download error ${error}`,
          {
                       style: {
              borderRadius: '10px',
              background: "red",
              color: '#fff',
            },
          }


        )
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
      // console.log(response);
    };
    getData();
  }, [query, page]);
  

  //  useEffect (()=> {
  //   axios.get(`https://pixabay.com/api/?${params}`)
  //  }, [])
  const handleSetQuery = newQuery => {
    // console.log(newQuery);
    setQuery(newQuery);
    setArticles([]);
    setPage(1);
  };

  const changeloadMore = () => {
    setPage(prev => prev + 1)
  }

  return (
    <>
      <h1 className="title">goit-react-hw-04</h1>
      <SearchBar handleSetQuery={handleSetQuery} />
      <ImageGallery articles={articles} />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error...</h2>}
<LoadMoreBtn changeloadMore={changeloadMore}/>
      {/* <button onClick={() => setPage(prev => prev + 1)}>Load more </button> */}
      {/* <LoadMoreBtn onClick={()=> setPage(prev => prev +1 )}/> */}
    </>
  );
}

export default App;
