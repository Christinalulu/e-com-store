import logo from '../../logo.svg'
const Loader = () => {
   return (
      <div className='change-logo-color fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-lime-300 opacity-95 flex flex-col items-center justify-center'>
         <img src={logo} className=' h-32 w-32 animate-bounce' alt='logo' />
      </div>
   )
}

export default Loader;