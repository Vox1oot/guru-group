import { useState, useEffect } from "react";
import Card from "./components/Card";
import getProducts from "./utilities/getProducts";
import imgURL from "./utilities/imgURL";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const products = await getProducts();
    setProducts(products);
  }, []);

  return (
    <>
      <h2>Похожие объявления</h2>
      <div className="d-flex main-container">
        {products.map((product) => (
          <Card key={product.id && product.id} data={product && product} imgURL={imgURL}/>
        ))}
      </div>
    </>
  );
}

export default App;
