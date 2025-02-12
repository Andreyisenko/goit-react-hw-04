import axios from 'axios';

// let page = 1;
const YOUR_ACCESS_KEY = 'Hg1CpLsou6vsLxEalGGcMeVDU3n-0eTBhr2sOtrVw94';
export const fetchArticles = async (query, page) => {
  
  const params = new URLSearchParams({
    client_id: YOUR_ACCESS_KEY,
    query,
    page,
    per_page: 20,
  });
  const response = await axios.get(
    // `https://api.unsplash.com/search/photos?client_id=${YOUR_ACCESS_KEY}&page=1&query=${query}`
    `https://api.unsplash.com/search/photos1?${params} ` 
  );
  // console.log(response.data);
  // console.log(response.data.total_pages);
  return response.data
};
