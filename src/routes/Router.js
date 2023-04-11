import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import ProductDetails from "../components/pages/ProductDetails"


function Router(){
  
   return(
      <>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/products" element={<HomePage/>}/>
         <Route path="/product/:id" element={<ProductDetails/>} />
   
      </Routes>
      </>
   )

}
export default Router;