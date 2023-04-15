import { useSelector } from "react-redux";

const CheckOutPage = () => {
  const { productsInCart } = useSelector((state) => state.cart);
  console.log(productsInCart);

  return (
    <div className="flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8">
      <div className="flex w-full max-w-3xl transhtmlForm text-left text-base transition sm:my-8">
        <from className="relative flex w-full flex-col overflow-hidden bg-white pb-8 pt-6 sm:rounded-lg sm:pb-6 lg:py-8">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
          </div>
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul
              role="list"
              className="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8">
              {productsInCart.map((product) => (
                <li className="flex py-8 text-sm sm:items-center">
                  <img
                    src={product.imageUrl}
                    alt={product.tags}
                    className="h-24 w-24 flex-none rounded-lg border border-gray-200 sm:h-32 sm:w-32"
                  />
                  <div className="ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-x-5 gap-y-3 sm:ml-6 sm:flex sm:items-center sm:gap-0">
                    <div className="row-end-1 flex-auto sm:pr-6">
                      <h3 className="font-medium text-gray-900">
                        <span>{product.title}</span>
                      </h3>
                      <p className="mt-1 text-gray-500">{product.tags}</p>
                    </div>
                    <p className="row-span-3 row-end-3 font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right">
                      NOK {product.price}
                  
                    </p>
                    <div className="flex items-center sm:block sm:flex-none sm:text-center">
                      <button
                        type="button"
                        className="ml-2 font-medium text-red-600 hover:text-indigo-500 sm:ml-0 sm:mt-2">
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section
            aria-labelledby="summary-heading"
            className="mt-auto sm:px-6 lg:px-8">
            <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>
              <div className="flow-root">
                <dl className="-my-4 divide-y divide-gray-200 text-sm">
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Orders</dt>
                    <dd className="font-medium text-gray-900">4</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      $320.40
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
          <div className="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
            <button
              type="submit"
              className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              Continue to Payment
            </button>
          </div>
        </from>
      </div>
    </div>
  );
};

export default CheckOutPage;
