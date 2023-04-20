import ContactForm from "../ContactForm";
const ContactPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-lime-200 to-white-400">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-6xl flex text-green-700">
        <ion-icon name="balloon-outline"></ion-icon>
        <h2 className="mt-6 text-center text-2xl font-bold uppercase leading-9 tracking-tight text-green-950">
          Contact Us Flopsy
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
