import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/modules/productsSlice";
import { Link } from "react-router-dom";
import { addSingelProductToCart } from "../../store/modules/cartSlice";


const HomePage = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productsSlice);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900"> All the Products</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {/* Maping on the product This is card start*/}
          {product.map((product) => (
            <div key={product.id}>
              <div className=" group relative">
             
                <div className="relative h-72 w-full overflow-hidden bg-yellow-900 rounded-lg group-hover:opacity-40 ">
                <Link to={`product/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                    className="h-full w-full object-cover object-center"
                  />
                  </Link>
                </div>
                
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                  <Link to={`product/${product.id}`}>
                    <span className=" text-lg"> {product.title}</span>
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.tags}</p>
                </div>
                <div>
                   {/* //TODO:  Add an review starts */}
                  <p>Rating {product.rating}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                  <p className="relative text-lg font-semibold text-white">
                    NOK{product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex justify-center ">
                <Link to={`product/${product.id}`}>
                  <div className="relative m-2 flex items-center justify-center rounded-md border border-transparent bg-lime-400 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-green-300">
                    See More
                  </div>
                </Link>
                <Link to={`/cart`}>
                  <div 
                  onClick={()=> dispatch(addSingelProductToCart(product))}
                   className="relative m-2 flex items-center justify-center rounded-md border border-transparent bg-lime-400 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-green-300">
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
