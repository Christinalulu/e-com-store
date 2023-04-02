import { Route, Routes } from "react-router-dom";
import Products from "../components/pages/Products";
import ProductDetails from "../components/pages/ProductDetails"

function Router(){
   return(
      <>
     
      <Routes>
         <Route path="/" element={<Products/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/product/:id" element={<ProductDetails/>} />
   
      </Routes>
     


      </>
   )

}
export default Router;