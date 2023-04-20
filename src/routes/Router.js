import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import ProductDetails from "../components/pages/ProductDetails"
import CheckOutPage from "../components/pages/CheckOutPage"
import ContactPage from "../components/pages/ContactPage"
import PageNotFound from "../components/pages/PageNotFound";

function Router(){
   return(
      <>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/products" element={<HomePage/>}/>
         <Route path="/product/:id" element={<ProductDetails/>} />
         <Route path="/cart" element={<CheckOutPage/>} />
         <Route path="/contact_us" element={<ContactPage/>} />

         <Route path="*" element={<PageNotFound/>} />
   
      </Routes>
      </>
   )

}
export default Router;