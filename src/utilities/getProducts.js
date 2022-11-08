import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.get('https://6075786f0baf7c0017fa64ce.mockapi.io/products');
    return response.data;
  } catch (err) {
    new Error('Network error');
  }
};

export default getProducts;