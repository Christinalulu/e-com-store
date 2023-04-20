
const ErrorComponent = ({ message }) => {
  return (
    <>
      <div className=" shadow sm:rounded-lg flex justify-start  mt-10 mb-10 bg-lime-100">
        <div className="px-4 py-5 text-4xl sm:p-6 justify-start m-auto">
        <ion-icon name="alert-circle-outline"></ion-icon>
          <h3 className="text-2xl sm:text-4xl font-semibold leading-6 text-gray-900">
           {message} No Products
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorComponent;
