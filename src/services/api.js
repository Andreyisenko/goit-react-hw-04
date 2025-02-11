import axios from 'axios';

let page = 1;
const YOUR_ACCESS_KEY = 'Hg1CpLsou6vsLxEalGGcMeVDU3n-0eTBhr2sOtrVw94';
export const fetchArticles = async query => {
  const params = new URLSearchParams({
    client_id: YOUR_ACCESS_KEY,
    query,
    page,
    per_page: 10,
  });
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?${params}`
  );
  console.log(response.data.results);
  return response.data.results;
};
