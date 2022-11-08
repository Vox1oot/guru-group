import { useState, useEffect } from "react";
import Card from "./components/Card";
import getProducts from "./utilities/getProducts";
import imgURL from "./utilities/imgURL";
import  toastify  from './toastify/toast';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState({ common: 0, downloaded: 0 });

  const addDownloaded = () => setCount({ ...count, downloaded: count.downloaded += 1 });

  useEffect(() => {
    const fetchProduct= async () => {
      const products = await await getProducts();
      setProducts(products);
      setCount({ ...count,  common: products.length });
    };

    fetchProduct();
  }, []);

  if (count.common && count.common === count.downloaded) {
    toastify();
  }

  console.log(count);

  return (
    <>
      <h2>Похожие объявления</h2>
      <div className="d-flex main-container">
        {products.map((product) => (
          <Card key={product.id && product.id} data={product && product} imgURL={imgURL} addDownloaded={addDownloaded}/>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
