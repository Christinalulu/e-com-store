import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/modules/productsSlice";


function App() {
const dispatch = useDispatch();
const {products} = useSelector(state => state.productsSlice)

  useEffect(()=>{
    dispatch(fetchProducts())

  },[dispatch]);
  console.log(products);
 

  // returning on HTML
  return (
    <div>
      <h1 className=" underline  text-red-500 text-4xl font-thin ">Flopsy</h1>

      {/* Maping on the product */}
      {products.map((products) =>(
        <div>
          <h2>{products.title}</h2>
        </div>

      ))}
    </div>
  );
}

export default App;
