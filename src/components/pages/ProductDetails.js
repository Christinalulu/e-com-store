import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProductById } from "../../store/modules/productsSlice";
import { addSingelProductToCart } from "../../store/modules/cartSlice";

const ProductDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
   const {productDetails, isError} = useSelector(state => state.productsSlice)
   
  useEffect(() => {
    dispatch(fetchSingleProductById(id));
  }, [dispatch, id]);

  return (
    <>
    {productDetails && !isError && <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 list-none ">
            <li>
              <div className="flex items-center">
              <Link to="/">
                <div  className="mr-4 text-sm font-medium text-gray-900 hover:text-lime-400">
                  Home
                </div>
                </Link>
                <svg
                  viewBox="0 0 6 20"
                  aria-hidden="true"
                  className="h-5 w-auto text-gray-300">
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="mr-4 text-sm font-medium text-gray-900">
                  {productDetails.tags}
                </div>
                <svg
                  viewBox="0 0 6 20"
                  aria-hidden="true"
                  className="h-5 w-auto text-gray-300">
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <div
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600">
              {productDetails.title}
              </div>
            </li>
          </div>
        </nav>
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                {productDetails.title}
                </h1>
              </div>
              <div className="mt-4">
              <p className="text-xl font-medium text-gray-600">NOK {productDetails.price} </p>
              </div>
            </div>
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <img
                  src={productDetails.imageUrl}
                  alt={productDetails.tags}
                  className="lg:col-span-2 lg:row-span-2 rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-8 lg:col-span-5">
            <div>
                <h2 className="text-sm font-medium text-gray-900">Description</h2>
                <div className=" col-span-2 mt-4 text-gray-500">
                  <p>
                  {productDetails.description}
                  </p> 
                </div>
                <div className=" mt-8 flex justify-between ">
                <h3 className="">Discount</h3>
                <p className=" text-red-500">Buy Now  For {productDetails.discountedPrice}kr</p>
                </div>
              </div>
                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-lime-400 px-8 py-3 text-base font-medium text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={()=> dispatch(addSingelProductToCart(productDetails))}>
                  Add to cart
                </button>
            </div>
          </div>
        </div>
      </div>
    </div> }
    </>
  );
};

export default ProductDetails;
