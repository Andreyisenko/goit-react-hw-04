// import axios from 'axios'
import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';

let page = 1;
const YOUR_ACCESS_KEY = 'Hg1CpLsou6vsLxEalGGcMeVDU3n-0eTBhr2sOtrVw94';
const params = new URLSearchParams({
  client_id: YOUR_ACCESS_KEY,
  query: `cat`,
  page,
  per_page: 15,
});

// const API_KEY = '47413156-c8c9abea8f6d88937b7892740';
// const params = new URLSearchParams({
//   key: API_KEY,

//   q: `pig`,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
// });

function App() {
  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/?${params}`);
  }, []);

  //  useEffect (()=> {
  //   axios.get(`https://pixabay.com/api/?${params}`)
  //  }, [])

  return (
    <>
      <h1>goit-react-hw-04</h1>
      <SearchBar/>
    </>
  );
}

export default App;
